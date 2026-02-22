/**
 * E2E Test Constants
 *
 * Shared constants for all E2E test specs.
 * The default locale is 'en' for test stability; adjust if needed.
 */

/** Default locale prefix used in URLs */
export const LOCALE = 'en';

/** Base URL path with locale prefix */
export const BASE = `/${LOCALE}`;

/** Test user credentials for signup/signin flows */
export const TEST_USER = {
  name: 'E2E Test User',
  email: `e2e-test-${Date.now()}@example.com`,
  password: 'TestPassword123!',
};

/**
 * Generate a unique test email for each test run.
 * Prevents conflicts when tests create accounts.
 */
export function uniqueEmail(prefix = 'e2e'): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}@example.com`;
}

/** Well-known page paths (without locale prefix) */
export const PAGES = {
  home: `${BASE}`,
  signin: `${BASE}/signin`,
  signup: `${BASE}/signup`,
  forgotPassword: `${BASE}/forgot-password`,
  resetPassword: `${BASE}/reset-password`,
  dashboard: `${BASE}/dashboard`,
  pricing: `${BASE}/pricing`,
  ai: `${BASE}/ai`,
  imageGenerate: `${BASE}/image-generate`,
  videoGenerate: `${BASE}/video-generate`,
  upload: `${BASE}/upload`,
  premiumFeatures: `${BASE}/premium-features`,
  admin: `${BASE}/admin`,
  adminUsers: `${BASE}/admin/users`,
} as const;

/** API endpoints used in auth helpers */
export const API = {
  signUp: '/api/auth/sign-up/email',
  signIn: '/api/auth/sign-in/email',
  signOut: '/api/auth/sign-out',
  getSession: '/api/auth/get-session',
} as const;

/** Timeouts for various operations */
export const TIMEOUTS = {
  /** Page navigation + hydration */
  navigation: 15_000,
  /** Auth API calls */
  auth: 10_000,
} as const;
