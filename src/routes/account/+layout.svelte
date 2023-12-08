<script>
   import { AppShell } from '@skeletonlabs/skeleton'
	import Navbar from '$lib/components/account-components/Navbar.svelte';
</script>

<AppShell>
    <svelte:fragment slot="header">
        <Navbar />
    </svelte:fragment>
    <slot></slot>
</AppShell>