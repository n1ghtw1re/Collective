// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jrkhqqafpkykgribayzq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impya2hxcWFmcGt5a2dyaWJheXpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNDk4MjAsImV4cCI6MjA2MzcyNTgyMH0.Ecc0mLS1ACy4xK_bKM1LULHHa3PqDAV2J3aT2PLkmCs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);