/**
 * API request/response shapes for the REST backend.
 * Paths live in `src/config/api-endpoints.ts`; keep types here only.
 */

import type { CommonCourse, User } from './entities';

// ─── Shared / envelope ───────────────────────────────────────

/** Typical success wrapper if the API uses a standard envelope */
export interface ApiSuccess<T> {
  data: T;
}

// ─── Auth ────────────────────────────────────────────────────

export interface SendOtpRequest {
  phone: string;
}

export interface SendOtpResponse {
  success: boolean;
  message: string;
}

export interface VerifyOtpRequest {
  phone: string;
  otp: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  token: string;
  user: User;
}

export interface LogoutResponse {
  success: boolean;
}

export interface MeResponse {
  user: User;
}

// ─── Home ────────────────────────────────────────────────────

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

export interface HeroSlidesResponse {
  slides: HeroSlide[];
}

export interface FeaturedCommonCoursesResponse {
  courses: CommonCourse[];
}

export interface EcosystemItem {
  title: string;
  desc: string;
  image: string;
}

export interface EcosystemResponse {
  items: EcosystemItem[];
}

// ─── CommonCourse listing ─────────────────────────────────────────

export interface GetCommonCoursesResponse {
  courses: CommonCourse[];
}

export interface GetSubjectsResponse {
  subjects: string[];
}

// ─── Board selection ─────────────────────────────────────────

export interface ClassInfo {
  id: string;
  name: string;
  description?: string;
}

export interface BoardItem {
  id: string;
  name: string;
  classes: ClassInfo[];
}

export interface GetBoardsResponse {
  boards: BoardItem[];
}

// ─── About ───────────────────────────────────────────────────

export interface AboutSection {
  title: string;
  body: string;
  image: string;
}

export interface AboutContentResponse {
  sections: AboutSection[];
}

// ─── Contact ─────────────────────────────────────────────────

export interface ContactFormRequest {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}

export interface ContactSubmitResponse {
  success: boolean;
  ticketId: string;
}

// ─── FAQs ────────────────────────────────────────────────────

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqsResponse {
  faqs: FaqItem[];
}

// ─── Legal ───────────────────────────────────────────────────

export interface LegalContentResponse {
  html: string;
}
