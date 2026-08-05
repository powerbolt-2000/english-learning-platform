import { NextResponse } from 'next/server';
import { sampleUsers, sampleCourses } from '@/lib/data';

export async function GET() {
  return NextResponse.json({ users: sampleUsers, courses: sampleCourses });
}
