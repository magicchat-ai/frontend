import { createParser, ParsedEvent, ReconnectInterval } from "eventsource-parser";

// async function OpenAIStream(payload: any) {
  

//   return stream;
// }

export const runtime = "edge"

export async function POST(req: Request): Promise<Response> {
  const { prompt, context } = (await req.json()) as {
    prompt?: string;
    context?: string;
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
    max_tokens: 200,
    stream: true,
    n: 1,
  };

  // const stream = await OpenAIStream(payload);
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let counter = 0;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify({
      'model': "gpt-3.5-turbo",
      'messages': [
        {'role': 'system', 'content': `You are talking to a kid as ${context}`},
        {'role': 'user', 'content': prompt}
      ],
      top_p: 1,
      max_tokens: 200,
      stream: true,
    }),
  });

  const stream = new ReadableStream({
    async pull(controller) {
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event) {
          // @ts-expect-error
          const data = event.data;
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            const {content} = json.choices[0].delta;
            if (counter < 2 && content && (content.match(/\n/) || []).length) {
              return;
            }
            const queue = encoder.encode(content);
            if(queue) {controller.enqueue(queue);}
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
    "Access-Control-Allow-Origin": "*",
    },
  });
};