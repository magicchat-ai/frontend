export const runtime = "edge"

export async function POST(req: Request): Promise<Response> {
    return new Response("works", {
        status: 200,
        headers: {
            "Content-Type": "text/plain"
        }
    })
}