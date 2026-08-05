import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    students: 3200,
    teachers: 180,
    revenue: 42000,
    completionRate: 92,
  });
}
