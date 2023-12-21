import { supabase } from "$lib/supabaseClient"

export async function load() {
    const { data } = await supabase.from('manhwa_info')
    .select();
    return {
        manhwa_info: data ?? [],
    };
}