// speech streaming with Eleven Labs
export const runtime = "edge"

export async function POST(req: Request): Promise<Response> {
    const { text_content, user_id, voice_id } = (await req.json()) as {
      text_content: string
      user_id: string
      voice_id: string
    }
    
    // query the account balance first
    let subs_balance = 0
    const subs = await fetch(`https://magicchat-api.onrender.com/get-subs?user_id=${user_id}`, {
      method: 'GET',
      headers: {"Content-Type": "application/json"},
    })
    .then((res) => res.json())
    .then((data) => subs_balance = data.data)

    // if subscription is in negative or zero
    if(subs <= 0) {
      return new Response("ZeroBalance. Please recharge to enjoy services", {
        status: 400,
        headers: {
          "content-type": "text/plain",
          "Cache-Control": "no-cache",
        }
      })
    } 

    const requestBody = {
        text: text_content,
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: 0,
          similarity_boost: 0
        }
    }

    const res:any = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice_id}/stream?optimize_streaming_latency=0`, {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'xi-api-key': `${process.env.ELEVEN_LABS}`
        },
        body: JSON.stringify(requestBody)
    })

    const stream = new ReadableStream({
        async pull(controller) {
            for await (const chunk of res.body as any) {
                controller.enqueue(chunk)
            }
            controller.close()
        }
    })

    return new Response(stream, {
        status: 200,
        headers: {
            "Content-Type": "audio/mpeg"
        }
    })
}