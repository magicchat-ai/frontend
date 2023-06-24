// speech streaming with Play.ht
import { createParser, ParsedEvent, ReconnectInterval } from "eventsource-parser";
import axios from "axios"
import "regenerator-runtime/runtime.js"

export const runtime = "edge"

export async function POST(req: Request): Promise<Response> {
    const { text_content, user_id, char_id } = (await req.json()) as {
      text_content: string
      user_id: string
      char_id: string
    };
    
    let counter = 0
    // query the account balance first
    let subs_balance = 0
    // const subs = await fetch(`https://magicchat-api.onrender.com/get-subs?user_id=${user_id}`, {
    //   method: 'GET',
    //   headers: {"Content-Type": "application/json"},
    // })
    // .then((res) => res.json())
    // .then((data) => subs_balance = data.data)

    // const options = {
    //     method: 'POST',
    //     headers: {
    //         accept: 'audio/mpeg', 
    //         'content-type': 'application/json',
    //         Authorization: `Bearer ${process.env.PLAY_HT_KEY}`,
    //         'x-user-id': `${process.env.PLAY_HT_USER_ID}`
    //     },
    //     body: JSON.stringify(
    //         { 
    //             text: text_content, 
    //             voice: 'larry', 
    //             speed: 1, 
    //             sample_rate: 24000, 
    //             quality: 'draft', 
    //             output_format: 'mp3'
    //         })
    // };

    // const res = fetch(PLAY_HT_URL, options)

    const requestBody = {
        "text": "string",
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
          "stability": 0,
          "similarity_boost": 0
        }
      }
    const res:any = await axios.post('https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/stream?optimize_streaming_latency=0', requestBody, {
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'xi-api-key': `${process.env.ELEVEN_LABS}`
        },
        responseType: "blob"
    }).then((res: any) => console.log(res))

    let reader = res.body.getReader()
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      console.log(value)
    }

    const stream = new ReadableStream({
        async pull(controller) {
            async function onParse(event: ParsedEvent | ReconnectInterval) {
                if (event) {
                    // @ts-expect-error
                    const data = event.data;
                    console.log(data)
                    if (!data) {
                        controller.close()
                        return;
                    } 
                    try {
                        if (data) {
                            controller.enqueue(data);
                        }
                    } catch (e) {
                        controller.error(e);
                    }
                }
            }
            const parser = createParser(onParse);

            // for await (const chunk of res.body as any) {
            //     console.log(chunk)
            //     parser.feed(chunk)
            // }
        }
    })
    
    // if subscription is in negative or zero
    // if(subs && subs_balance<=0) {
    //   return new Response("ZeroBalance. Please recharge to enjoy services", {
    //     status: 400,
    //     headers: {
    //       "content-type": "text/plain",
    //       "Cache-Control": "no-cache",
    //     }
    //   })
    // }   

    return new Response('works', {
        status: 200,
        headers: {
            "Content-Type": "audio/mpeg"
        }
    })
}