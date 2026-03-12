import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Use non-null fallback to prevent crash during Vercel build if env vars aren't set yet
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
  
  return createBrowserClient(url, key)
}
