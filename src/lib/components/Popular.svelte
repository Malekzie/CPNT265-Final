<script>
 import BigCard from "./BigCard.svelte";
</script>

<div class="p-5 mx-32 divide-black rounded-lg bg-slate-500">
  <div class="flex justify-between border-b border-black">
    <h1 class="p-2 text-2xl">Popular today</h1>
    <button class="px-3 mr-3 text-sm rounded-lg variant-filled-primary">See all</button>
  </div>
  <div class="flex justify-around gap-5">
    <BigCard />
    <BigCard image="cyber-cover" title="Cyber Link" />
    <BigCard image="titan-latest" title="Titans Stand"/>
    <BigCard image="devil-returns-latest" title="The Devil returns to school"/>
    <BigCard image="void-pop"/>
  </div>
</div>