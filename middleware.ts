// MiddleWare to handle requests to and fro client and server
import { Readable } from 'stream';
import { NextResponse, NextRequest } from 'next/server'

export const config = {
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

            let resp = await fetch('https://api.openai.com/v1/chat/completions', {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
                },
                'body': JSON.stringify({
                    'model': 'gpt-3.5-turbo',
                    'messages': [
                        {'role': 'system', 'content': context},
                        {'role': 'user', 'content': question}
                    ],
                    'stream': true
                }),
            });

            let reader = resp?.body?.pipeThrough(new TextDecoderStream())?.getReader()
            const resultStream = new ReadableStream({
                async pull(controller) {
                    // @ts-expect-error
                    const { value, done } = await reader.read()
                    if (done) controller.close()
                    controller.enqueue(value)
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
        catch {
            return new Response("network error")
        }
    } 
}