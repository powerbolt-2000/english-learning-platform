import { NextResponse } from 'next/server';
import { subscriptionPlans } from '@/lib/data';

export async function GET() {
  return NextResponse.json(subscriptionPlans);
}
