import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://azjroagddolvrgugniyu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6anJvYWdkZG9sdnJndWduaXl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI4NDk3MDcsImV4cCI6MTk4ODQyNTcwN30.778qK_MHoFeZFbrm7j4MmfNeuKBnN2s6bahsj7S2ngA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
