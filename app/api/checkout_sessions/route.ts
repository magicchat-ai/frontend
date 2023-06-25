import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  const user_id = 'OevcHlSP5sfpiEs0R5VBteOW6Ay2'
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
      success_url: `${req.headers.get('origin')}/dashboard/account?success=true`,
      cancel_url: `${req.headers.get('origin')}/dashboard/account?canceled=true`,
      metadata: {
        user_id: user_id
      }
    });
    return NextResponse.redirect(session.url, {status: 303});
  } catch (err: any) {
    return NextResponse.json(err);
  }
}