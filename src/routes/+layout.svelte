<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Skeleton UI Imports
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';

	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	// Component Imports
	import Header from '$lib/components/Header.svelte';

	import SignUp from '$lib/components/SignUp.svelte';

	// Enter Modal Components here, use the same format as the example below
	const modalRegistry: Record<string, SignUp> ={
		modalComponentOne: { ref: SignUp }
	};
</script>

<!-- This allows modal components to be global-->
<Modal components={modalRegistry}/>
<AppShell>
	<svelte:fragment slot="pageHeader">
		<Header />
	</svelte:fragment>

	<slot />
</AppShell>
