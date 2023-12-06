<script>
	import Hero from '$lib/components/Hero.svelte';
	import { browser } from '$app/environment';

	if (browser) {
    const button = document.querySelector('.button');
    const p = document.querySelector('.fucker');
    p.innerHTML="work pls"
    console.log(p)
	}
</script>

<Hero />

<button class="button">Sup</button>

<p class="fucker">a</p>
