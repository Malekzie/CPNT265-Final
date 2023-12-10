<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation'

	// Floating UI for Popups

	// Skeleton UI Imports
	import { AppShell } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	
	export let data;
	initializeStores();

	// Component Imports
	import Header from '$lib/components/Header.svelte';

	let { supabase, session } = data;
	$: ({ supabase, session }= data);

	onMount(() => {
	const { data } = supabase.auth.onAuthStateChange((event, _session) => {
		if (_session?.expires_at !== session?.expires_at) {
			invalidate('supabase:auth')
		}
	})

	return () => data.subscription.unsubscribe()
})

</script>

<!-- This allows modal components to be global-->
<AppShell>
	<svelte:fragment slot="pageHeader">
		<Header />
	</svelte:fragment>

	<slot />
</AppShell>
