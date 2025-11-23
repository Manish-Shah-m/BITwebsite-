// lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables!');
}

// Initialize Supabase client (singleton pattern like Firebase)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export individual services for convenience (similar to Firebase structure)
export const auth = supabase.auth;
export const storage = supabase.storage;
export const db = supabase; // For database queries (instead of Firestore)

// Default export
export default supabase;