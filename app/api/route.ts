if (!process.env.NEXT_PUBLIC_OPENAI_KEY) {
  throw new Error("Missing env var from OpenAI");
}

export const runtime = "edge"

export async function POST(req: Request): Promise<Response> {
  try { 
            
    let requestBody = await req.json()
    let context = requestBody.context
    let question = requestBody.prompt

    let response = await fetch('https://api.openai.com/v1/chat/completions', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
            'OpenAI-Organization': `${process.env.NEXT_PUBLIC_OPENAI_ORG}`
        },
        'body': JSON.stringify({
            'model': 'gpt-3.5-turbo',
            'messages': [
                {'role': 'system', 'content': `You are talking to a kid as ${context}`},
                {'role': 'user', 'content': question}
            ],
            'stream': true
        }),
    });

    // @ts-expect-error
    const reader = response.body.getReader();
    const encoder = new TextEncoder()
    const decoder = new TextDecoder("utf-8");

    const resultStream = new ReadableStream({
      async pull(controller) {
        const { done, value } = await reader.read();
        if (done) {
          controller.close()
        }
        // Massage and parse the chunk of data
        const chunk = decoder.decode(value);
        const lines = chunk.split(`\n`);
        const parsedLines = lines.map((line) => {return line.replace(/^data: /, "").trim()})
        .filter((line) => {return line !== "" && line !== "[DONE]"})
        // .map((line) => { console.log(line); return JSON.parse(line) });

        for (const parsedLine of parsedLines) {
          // const { choices } = parsedLine;
          // const { delta } = choices[0];
          const content = parsedLine;
          if (content) {
            controller.enqueue(encoder.encode(content))
          }
        }
      },
    },
    {
      highWaterMark: 1,
      size(chunk) {
        return 1;
      },
    })            

    return new Response(resultStream, {
      status: 200,
      // headers: {
      // "content-type": "text/plain",
      // "Cache-Control": "no-cache",
      // },
    });
  }
  catch(error) {
      return new Response("Network Error")
  }
}