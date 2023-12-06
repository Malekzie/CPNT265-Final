<script>
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Skeleton UI Imports
	import { AppShell } from '@skeletonlabs/skeleton'

	// Component Imports
	import SideBar from '$lib/components/SideBar.svelte';
	import Header from '$lib/components/Header.svelte';
</script>


<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<SideBar />
	</svelte:fragment>

	<svelte:fragment slot="pageHeader">
		<Header/>
	</svelte:fragment>
	
	<slot />
</AppShell>