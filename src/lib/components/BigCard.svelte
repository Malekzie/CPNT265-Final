<script>
 export let image = "abyss-latest"
 import { Ratings } from '@skeletonlabs/skeleton';
 export let recentChapter = "Chapter 1"
 export let rating = { current: 4.5, max: 5}
 export let title = "Abyss Rage"
</script>

<div class="my-2 max-w-[10rem]">
  <div>
    <img src="images/{image}.jpg" alt="" class="w-[10rem] h-auto">
  </div>
  <div>
    <h1 class="text-xl">{title}</h1>
    <a href="/" class="text-sm">{recentChapter}</a>
    <div class="flex">
      <Ratings bind:value={rating.current} max={rating.max} spacing="spacing-x-2" interactive="true" fill="fill-yellow-300">
        <svelte:fragment slot="empty"
          ><iconify-icon icon="material-symbols:star-outline" /></svelte:fragment
        >
        <svelte:fragment slot="half"
          ><iconify-icon icon="material-symbols:star-half-outline" /></svelte:fragment
        >
        <svelte:fragment slot="full"><iconify-icon icon="jam:star-full" /></svelte:fragment>
      </Ratings>
      <p>{rating.current}</p>
    </div>
  </div>
  
    
</div>