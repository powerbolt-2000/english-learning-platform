import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    ok: true,
    message: 'Login endpoint ready',
    email: body?.email,
    role: 'student',
  });
}
