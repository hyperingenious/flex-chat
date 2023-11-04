import { createClient } from "@supabase/supabase-js";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3cHVkY2hlaWFqZGhyd3l6dGJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxMDQ0OTIsImV4cCI6MjAxMjY4MDQ5Mn0.talZD5x8AcCmCMirct0tKvg0TdBosGIfdbLiKoSrGd8";
const supabaseUrl = "https://bwpudcheiajdhrwyztbr.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseKey);
