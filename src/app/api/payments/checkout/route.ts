import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    ok: true,
    message: 'Checkout endpoint ready',
    plan: body?.plan || 'Premium',
    paymentMethod: body?.paymentMethod || 'Stripe',
  });
}
