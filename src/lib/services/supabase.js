// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wtupvukjbfmxkvgydpad.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseKey) {
  throw new Error("Missing env.SUPABASE_KEY");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
