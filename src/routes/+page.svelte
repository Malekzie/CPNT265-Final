<script>
	import Hero from '$lib/components/Hero.svelte';
	import ManhwaCard from '$lib/components/ManhwaCard.svelte';
	import Popular from '$lib/components/Popular.svelte';
	import Latest from '$lib/components/Latest.svelte';

</script>

<Hero />

<div class="flex flex-col gap-5">
	<Popular />
	
	<Latest/>
</div>