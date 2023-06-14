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

            let count = 0;
            const resultStream = new ReadableStream({
                pull(controller) {
                    if (count < 10) {
                        controller.enqueue(context)
                        count++
                    } else {
                        controller.close();
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
        catch {
            return new Response("network error")
        }
    } 
}