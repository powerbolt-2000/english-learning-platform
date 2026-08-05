import type { Course, Lesson, SubscriptionPlan, UserProfile } from '@/types';

export const sampleUsers: UserProfile[] = [
  { id: 'u1', name: 'Amina Hassan', email: 'amina@example.com', role: 'student' },
  { id: 'u2', name: 'Omar Khaled', email: 'omar@example.com', role: 'teacher' },
  { id: 'u3', name: 'Layla Noor', email: 'layla@example.com', role: 'admin' },
];

export const sampleCourses: Course[] = [
  { id: 'c1', title: 'Conversation Lab', description: 'Speak naturally with guided practice.', level: 'Beginner', duration: '6 weeks', lessons: 12 },
  { id: 'c2', title: 'Business English', description: 'Refine professional language skills.', level: 'Intermediate', duration: '8 weeks', lessons: 16 },
  { id: 'c3', title: 'IELTS Accelerator', description: 'Prepare with mock tests and drills.', level: 'Advanced', duration: '10 weeks', lessons: 20 },
];

export const sampleLessons: Lesson[] = [
  { id: 'l1', courseId: 'c1', title: 'Vocabulary Foundations', type: 'video', duration: '12 min' },
  { id: 'l2', courseId: 'c2', title: 'Business Emails', type: 'pdf', duration: '18 min' },
  { id: 'l3', courseId: 'c3', title: 'Exam Simulation', type: 'exam', duration: '25 min' },
];

export const subscriptionPlans: SubscriptionPlan[] = [
  { id: 'free', name: 'Free', price: 0, currency: 'USD', features: ['Core lessons', 'Community access', 'Basic homework'] },
  { id: 'basic', name: 'Basic', price: 19, currency: 'USD', features: ['Full lesson library', 'PDF downloads', 'Progress tracking'] },
  { id: 'premium', name: 'Premium', price: 49, currency: 'USD', features: ['Live exams', 'Certificates', 'Priority support'] },
  { id: 'vip', name: 'VIP', price: 99, currency: 'USD', features: ['All access', 'AI assistant', 'Private coaching'] },
];
