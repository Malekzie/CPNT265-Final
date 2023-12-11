<script>
  import { Ratings } from '@skeletonlabs/skeleton';
  let rating = 3.5;
  let status;
  let author;
</script>

<section class="h-screen m-5 border border-solid rounded-lg grids bg-slate-800">
  <div class="border-solid Image Chapters">
    <div>
      <img src="/images/Manhwa.jpg" alt="Some" class="w-auto m-auto my-5 rounded-lg h-[30vh]">
    </div>
    <div class="max-w-[20rem] flex flex-col items-center">
      <button class="mx-auto rounded-lg w-52 variant-outline">Bookmark</button>
      <div class="flex justify-around px-10 py-2 my-2 rounded-md bg-slate-600">
        <Ratings value={3.5} max={5}>
          <svelte:fragment slot="empty"><iconify-icon icon="material-symbols:star-outline"></iconify-icon></svelte:fragment>
          <svelte:fragment slot="half"><iconify-icon icon="material-symbols:star-half-outline"></iconify-icon></svelte:fragment>
          <svelte:fragment slot="full"><iconify-icon icon="jam:star-full"></iconify-icon></svelte:fragment>
      </Ratings>
      <p class="ml-10">{rating}</p>
      </div>
      <div class="flex justify-around px-10 py-2 my-2 rounded-md bg-slate-600">
        <h1>Status: </h1>
        <p class="ml-10">{status}</p>
      </div>
      <div class="flex justify-around px-10 py-2 my-2 rounded-md bg-slate-600">
        <h1>Author: </h1>
        <p class="ml-10"> {author}</p>
      </div>
    </div>
  </div>
  <div class="border border-solid Description Chapters">
    a
  </div>
  <div class="border border-solid Chapters">
    
  </div>
</section>

<style>
.grids {
  display: grid;
  grid-template-columns: 0.4fr 1.6fr;
  grid-template-rows: 1.2fr 0.8fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "Image Description"
    "Chapters Chapters";
}

.Chapters { grid-area: Chapters; }

.Image { grid-area: Image; }

.Description { grid-area: Description; }

</style>