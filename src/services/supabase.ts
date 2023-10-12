import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.REACT_APP_ANON_PUBLIC_KEY || "";
const supabaseKey: string = process.env.REACT_APP_URL || "";

export const supabase = createClient(supabaseUrl, supabaseKey);
