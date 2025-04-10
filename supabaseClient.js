import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bnmxiyafvqwhzfzbvmqu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJubXhpeWFmdnF3aHpmemJ2bXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNTI0MjMsImV4cCI6MjA1OTgyODQyM30.u9Svj8xwH_mMwkPT9r5nx25EDLJvO3p9jAnE0laKLH0";

export const supabase = createClient(supabaseUrl, supabaseKey);
