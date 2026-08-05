export type UserRole = 'student' | 'teacher' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  lessons: number;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  type: 'video' | 'pdf' | 'homework' | 'exam';
  duration: string;
}

export interface SubscriptionPlan {
  id: string;
  name: 'Free' | 'Basic' | 'Premium' | 'VIP';
  price: number;
  currency: string;
  features: string[];
}
