<script>
 import BigCard from "./BigCard.svelte";
</script>

<div class="p-5 mx-32 divide-black rounded-lg bg-slate-500">
  <div>
    <h1 class="text-2xl">Popular today</h1>
  </div>
  <div class="flex justify-between">
    <BigCard />
    <BigCard image="cyber-cover" title="Cyber Link" />
    <BigCard image="titan-latest" title="Titans Stand"/>
    <BigCard image="devil-returns-latest" title="The Devil returns to school"/>
    <BigCard image="void-pop"/>
  </div>
</div>