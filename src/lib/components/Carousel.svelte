<script>
  export let tags = ['Magic', 'Archmage', 'Adventure', 'Some'];
</script>

<div class="flex justify-between m-10">
	<div class="flex flex-col gap-3 ">
		<div>
			<h1 class="text-xl">Archmage's Apprentice</h1>
      <div class="flex gap-2 w-[15rem] overflow-hidden">
        {#each tags as tag}
        {#if tag.length > 4}
        <p>{tag},</p>
        {:else}
        <p>...</p>
        {/if}
        {/each}
      </div>
		</div>
		<div>
			<p>Description</p>
			<p>Status</p>
			<p>Author:</p>
		</div>
	</div>
	<div>
		<img src="images/Manhwa.jpg" alt="" class="h-40 w-32 rounded-lg">
	</div>
</div>
