<script>

  export let i = 0
  let image = "images/mage-cover.jpg"
</script>

<div class="flex p-2">
  <div class="py-6 pr-5">
    <p class="p-2 border border-solid">{i}</p>
  </div>
  <img src="{image}" alt="some" class="w-20 h-auto">
  <div class="flex flex-col pl-2">
    <p class="">Title</p>
    <p class="">Genres</p>
    <p class="">Rating</p>
  </div>
</div>