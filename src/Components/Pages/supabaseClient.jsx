// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nxrrftoijgmwsukrncpe.supabase.co' // your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54cnJmdG9pamdtd3N1a3JuY3BlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NDE3MjksImV4cCI6MjA3MjIxNzcyOX0.9mZ5UdEvWZddtsnEnnF5LFzjlA_ThvxQaMXMjV7KVwQ' // your anon public key
export const supabase = createClient(supabaseUrl, supabaseKey)
