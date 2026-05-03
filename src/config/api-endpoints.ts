/**
 * ============================================================
 *  SIKSHA KENDRA — Page-wise API Endpoints
 * ============================================================
 *
 *  This file documents every API endpoint the frontend needs,
 *  organized by the page / feature that consumes it.
 *
 *  STATUS KEY:
 *    🟢  Ready        — Backend is live, integrated
 *    🟡  Pending      — Backend WIP / not yet built
 *    🔴  Mock         — Currently using static data (src/config/courses.ts)
 *
 *  Once the backend is available, replace the static imports in
 *  each page with calls through `apiClient` (src/lib/apiClient.ts).
 *
 *  TypeScript types for bodies and JSON responses live in
 *  src/types/api-responses.ts (re-exported from src/types/index.ts).
 * ============================================================
 */

// ─── Base URL ────────────────────────────────────────────────
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

// ─── Endpoint Definitions ────────────────────────────────────

export const API_ENDPOINTS = {

  // ══════════════════════════════════════════════════════════
  //  AUTH  (used by: Header, AuthModal, CourseCard)
  // ══════════════════════════════════════════════════════════
  AUTH: {
    /** POST — Send OTP to phone number */
    SEND_OTP: {
      method: 'POST' as const,
      path: '/auth/send-otp',
      body: '{ phone: string }',
      response: '{ success: boolean, message: string }',
      status: '🔴 Mock',
      usedBy: ['AuthModal (Step 1)'],
    },

    /** POST — Verify OTP and get auth token */
    VERIFY_OTP: {
      method: 'POST' as const,
      path: '/auth/verify-otp',
      body: '{ phone: string, otp: string }',
      response: '{ success: boolean, token: string, user: User }',
      status: '🔴 Mock',
      usedBy: ['AuthModal (Step 2)'],
    },

    /** POST — Logout / invalidate session */
    LOGOUT: {
      method: 'POST' as const,
      path: '/auth/logout',
      body: 'none (auth header)',
      response: '{ success: boolean }',
      status: '🔴 Mock',
      usedBy: ['Header (Log Out button)'],
    },

    /** GET — Get current user profile */
    ME: {
      method: 'GET' as const,
      path: '/auth/me',
      body: 'none (auth header)',
      response: '{ user: User }',
      status: '🔴 Mock',
      usedBy: ['App init — restore session'],
    },
  },

  // ══════════════════════════════════════════════════════════
  //  HOME PAGE  (/)
  // ══════════════════════════════════════════════════════════
  HOME: {
    /** GET — Hero carousel slides (images + text) */
    HERO_SLIDES: {
      method: 'GET' as const,
      path: '/content/hero-slides',
      params: 'none',
      response: '{ slides: Array<{ image: string, title: string, subtitle: string }> }',
      status: '🔴 Mock — hardcoded in HeroCarousel.tsx',
      usedBy: ['HeroCarousel'],
    },

    /** GET — Featured / promoted courses for homepage */
    FEATURED_COURSES: {
      method: 'GET' as const,
      path: '/courses/featured',
      params: '?limit=3',
      response: '{ courses: Course[] }',
      status: '🔴 Mock — filtered from COURSE_DATA',
      usedBy: ['Home (Our Core Programs section)'],
    },

    /** GET — Ecosystem items (Mind Maps, Notes, etc.) */
    ECOSYSTEM: {
      method: 'GET' as const,
      path: '/content/ecosystem',
      params: 'none',
      response: '{ items: Array<{ title: string, desc: string, image: string }> }',
      status: '🔴 Mock — hardcoded in Ecosystem.tsx',
      usedBy: ['Ecosystem'],
    },
  },

  // ══════════════════════════════════════════════════════════
  //  COURSE LISTING  (/course-listing?class=X)
  // ══════════════════════════════════════════════════════════
  COURSE_LISTING: {
    /** GET — All courses, optionally filtered by class */
    GET_COURSES: {
      method: 'GET' as const,
      path: '/courses',
      params: '?class=9|10|11|12  (optional)',
      response: '{ courses: Course[] }',
      status: '🔴 Mock — COURSE_DATA in courses.ts',
      usedBy: ['CourseListing'],
    },

    /** GET — Subjects available for a specific class */
    GET_SUBJECTS: {
      method: 'GET' as const,
      path: '/courses/subjects',
      params: '?class=9|10|11|12',
      response: '{ subjects: string[] }',
      status: '🔴 Mock — CLASS_METADATA in courses.ts',
      usedBy: ['CourseListing (Subject Grid)'],
    },
  },

  // ══════════════════════════════════════════════════════════
  //  BOARD SELECTION  (/board-cbse)
  // ══════════════════════════════════════════════════════════
  BOARD_SELECTION: {
    /** GET — Available boards with class info */
    GET_BOARDS: {
      method: 'GET' as const,
      path: '/boards',
      params: 'none',
      response: '{ boards: Array<{ id: string, name: string, classes: ClassInfo[] }> }',
      status: '🔴 Mock — hardcoded in BoardSelection.tsx',
      usedBy: ['BoardSelection'],
    },
  },

  // ══════════════════════════════════════════════════════════
  //  ABOUT US  (/about)
  // ══════════════════════════════════════════════════════════
  ABOUT: {
    /** GET — About page content (sections, images) */
    GET_CONTENT: {
      method: 'GET' as const,
      path: '/content/about',
      params: 'none',
      response: '{ sections: Array<{ title: string, body: string, image: string }> }',
      status: '🔴 Mock — hardcoded in About.tsx',
      usedBy: ['About'],
    },
  },

  // ══════════════════════════════════════════════════════════
  //  CONTACT US  (/contact)
  // ══════════════════════════════════════════════════════════
  CONTACT: {
    /** POST — Submit contact form */
    SUBMIT_FORM: {
      method: 'POST' as const,
      path: '/contact',
      body: '{ name: string, phone: string, email: string, course: string, message: string }',
      response: '{ success: boolean, ticketId: string }',
      status: '🟡 Pending',
      usedBy: ['Contact (Send Message form)'],
    },
  },

  // ══════════════════════════════════════════════════════════
  //  FAQs  (/faqs)
  // ══════════════════════════════════════════════════════════
  FAQS: {
    /** GET — Fetch FAQ list */
    GET_FAQS: {
      method: 'GET' as const,
      path: '/content/faqs',
      params: 'none',
      response: '{ faqs: Array<{ question: string, answer: string }> }',
      status: '🔴 Mock — hardcoded in Faqs.tsx',
      usedBy: ['Faqs'],
    },
  },

  // ══════════════════════════════════════════════════════════
  //  LEGAL PAGES  (/privacy, /terms)
  // ══════════════════════════════════════════════════════════
  LEGAL: {
    /** GET — Privacy policy content */
    PRIVACY: {
      method: 'GET' as const,
      path: '/content/privacy',
      params: 'none',
      response: '{ html: string }',
      status: '🔴 Mock — hardcoded in Privacy.tsx',
      usedBy: ['Privacy'],
    },

    /** GET — Terms & conditions content */
    TERMS: {
      method: 'GET' as const,
      path: '/content/terms',
      params: 'none',
      response: '{ html: string }',
      status: '🔴 Mock — hardcoded in Terms.tsx',
      usedBy: ['Terms'],
    },
  },
};


// ─── Helper: Build full URL ──────────────────────────────────
export const buildUrl = (path: string, params?: Record<string, string>): string => {
  const url = new URL(`${API_BASE_URL}${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  return url.toString();
};


// ─── Quick Reference Table (for console / debugging) ─────────
export const printApiSummary = () => {
  console.table([
    // Auth
    { page: 'Auth',           endpoint: '/auth/send-otp',        method: 'POST',   status: '🔴 Mock' },
    { page: 'Auth',           endpoint: '/auth/verify-otp',      method: 'POST',   status: '🔴 Mock' },
    { page: 'Auth',           endpoint: '/auth/logout',          method: 'POST',   status: '🔴 Mock' },
    { page: 'Auth',           endpoint: '/auth/me',              method: 'GET',    status: '🔴 Mock' },
    // Home
    { page: 'Home',           endpoint: '/content/hero-slides',  method: 'GET',    status: '🔴 Mock' },
    { page: 'Home',           endpoint: '/courses/featured',     method: 'GET',    status: '🔴 Mock' },
    { page: 'Home',           endpoint: '/content/ecosystem',    method: 'GET',    status: '🔴 Mock' },
    // Course Listing
    { page: 'CourseListing',  endpoint: '/courses',              method: 'GET',    status: '🔴 Mock' },
    { page: 'CourseListing',  endpoint: '/courses/subjects',     method: 'GET',    status: '🔴 Mock' },
    // Board Selection
    { page: 'BoardSelection', endpoint: '/boards',               method: 'GET',    status: '🔴 Mock' },
    // Contact
    { page: 'Contact',        endpoint: '/contact',              method: 'POST',   status: '🟡 Pending' },
    // Content
    { page: 'About',          endpoint: '/content/about',        method: 'GET',    status: '🔴 Mock' },
    { page: 'FAQs',           endpoint: '/content/faqs',         method: 'GET',    status: '🔴 Mock' },
    { page: 'Privacy',        endpoint: '/content/privacy',      method: 'GET',    status: '🔴 Mock' },
    { page: 'Terms',          endpoint: '/content/terms',        method: 'GET',    status: '🔴 Mock' },
  ]);
};
