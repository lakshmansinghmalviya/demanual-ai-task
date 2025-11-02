'use client';

import { useMemo } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export function useSupabase(): SupabaseClient | null {
  return useMemo(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return null;
    }

    return createClient(supabaseUrl, supabaseAnonKey);
  }, []);
}
