import { createClient } from '@supabase/supabase-js'
import { PUBLIC_URL, PUBLIC_KEY } from '$env/static/private'

export const supabase = createClient( PUBLIC_URL, PUBLIC_KEY)