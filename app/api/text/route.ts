import { createParser, ParsedEvent, ReconnectInterval } from "eventsource-parser";

export const runtime = "edge"

export async function POST(req: Request): Promise<Response> {
  const { prompt, context, user_id } = (await req.json()) as {
    prompt?: string;
    context?: string;
    user_id: string
  };

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      {'role': 'system', 'content': `You are talking to a kid as ${context}`},
      {'role': 'user', 'content': prompt}
    ],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 100,
    stream: true,
    n: 1,
  };

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let counter = 0
  let consumption = 0
  let subs_balance = 0
  
  const subs = await fetch(`https://magicchat-api.onrender.com/get-subs?user_id=${user_id}`, {
    method: 'GET',
    headers: {"Content-Type": "application/json"},
  })
  .then((res) => res.json())
  .then((data) => subs_balance = data.data)

  // if subscription is in negative
  if(subs && subs_balance<=0) {
    return new Response("ZeroBalance. Please recharge to enjoy services", {
      status: 400,
      headers: {
        "content-type": "text/plain",
        "Cache-Control": "no-cache",
      }
    })
  }

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_KEY ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  const stream = new ReadableStream({
    async pull(controller) {
      async function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event) {
          // @ts-expect-error
          const data = event.data;
          if (data === "[DONE]") {
            fetch(`https://magicchat-api.onrender.com/update-subs?&user_id=${user_id}&consumption=${consumption}&current_balance=${subs_balance}`, {
              method: 'GET',
              headers: {"Content-Type": "application/json"}
            })
            controller.close();
            return;
          }
          try {
            if(subs && subs_balance<=0) {
              controller.close()
              throw new Error("ZeroBalance. Please recharge to enjoy services")
              return;
            }

            const json = JSON.parse(data);
            const {content} = json.choices[0].delta;
            if (counter < 2 && content && (content.match(/\n/) || []).length) {
              return;
            }
            const queue = encoder.encode(content);
            if(queue) {
              if(content) consumption += content.length
              controller.enqueue(queue);
            }
            counter++;
          } catch (e) {
            controller.error(e);
          }
        }
      }
     const parser = createParser(onParse);

      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    },
  })
  return new Response(stream, {
    status: 200,
    headers: {
    "content-type": "text/plain",
    "Cache-Control": "no-cache",
    },
  });
};