// update the subscription per token of text generate
import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

export const runtime = "edge"

const app = initializeApp()
const db = getFirestore(app)

export async function POST(req: Request): Promise<Response> {
    const { user_id } = (await req.json()) as {
        user_id: string
    }
    
    return new Response('', {
        status: 200,
        headers: {
        "content-type": "text/plain",
        "Cache-Control": "no-cache",
        },
      });
}