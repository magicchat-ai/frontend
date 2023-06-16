// MiddleWare to handle requests to and fro client and server
import { Readable } from 'stream';
import { NextResponse, NextRequest } from 'next/server'

export const config = {
    runtime: 'edge',
    matcher: '/api/:path*',
}

type IRequestArgs = {
    context: string
}
// @ts-expect-error
export async function middleware(request: NextRequest, {params}) {
    if(request.nextUrl.pathname.startsWith('/api/generate')) {
        try { 
            
            let requestBody = await request.json()
            let context = requestBody.context
            let question = requestBody.question

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
                    .map((line) => { return JSON.parse(line) });

                    for (const parsedLine of parsedLines) {
                        const { choices } = parsedLine;
                        const { delta } = choices[0];
                        const { content } = delta;
                        // Update the UI with the new content
                        if (content) {
                            controller.enqueue(content)
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
                headers: {
                "content-type": "text/plain",
                "Cache-Control": "no-cache",
                },
            });
        }
        catch(error) {
            return new Response("Network Error")
        }
    } 
}