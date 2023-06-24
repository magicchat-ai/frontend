import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1NMbCFSG3S5qFksl9DO9UBbS',
            quantity: 1,
          },
        ],
        mode: 'payment',
        // ${req.headers.get('origin')}
        success_url: `https://google.com/?success=true`,
        cancel_url: `https://google.com/?canceled=true`,
      });
      console.log(session.url)
      return NextResponse.redirect(session.url, {status: 303});
    } catch (err: any) {
      return NextResponse.json(err);
    }
}