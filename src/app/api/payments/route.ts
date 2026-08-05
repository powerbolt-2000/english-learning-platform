import { NextResponse } from 'next/server';

const methods = ['Visa', 'Mastercard', 'Meeza', 'Bank Transfer', 'Vodafone Cash', 'Orange Cash', 'Etisalat Cash', 'WE Pay', 'Fawry', 'InstaPay', 'PayPal', 'Binance Pay', 'USDT (TRC20)', 'Bitcoin', 'Ethereum'];

export async function GET() {
  return NextResponse.json({ methods });
}
