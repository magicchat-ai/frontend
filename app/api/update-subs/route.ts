// update the subscription per token of text generate
const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

export const runtime = "edge"

const serviceAccount = require('./magic-chat-ddf75-e3484fe17c32.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

export async function POST(req: Request): Promise<Response> {
    try{
        const { user_id, consumption } = (await req.json()) as {
            user_id: string,
            consumption: number
        }

        const docRef = db.collection('users').doc(user_id)
        const doc = await docRef.get()
        const current_balance = doc.data().currBalance

        const new_balance = current_balance - consumption*0.002

        await docRef.update({
            currBalance: new_balance
        })
        console.log(new_balance)
        
        return new Response(JSON.stringify({
            'status': 'success',
        }), {
            status: 200,
            headers: {
            "content-type": "text/plain",
            "Cache-Control": "no-cache",
            },
        });
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({
            'status': error,
        }), {
            status: 400,
            headers: {
            "content-type": "text/plain",
            "Cache-Control": "no-cache",
            },
          });
    }
}