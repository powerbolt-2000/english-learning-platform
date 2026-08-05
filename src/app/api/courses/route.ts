import { NextResponse } from 'next/server';
import { sampleCourses } from '@/lib/data';

export async function GET() {
  return NextResponse.json(sampleCourses);
}
