<script>
	import { Ratings } from '@skeletonlabs/skeleton';
	let rating = 3.5;
	let status = "Ongoing";
	let author = "Author";
	let title = "Title"
  let description = "Lorem"
  let chapter = 1
</script>

<section class="h-screen m-5 border border-solid rounded-lg grids bg-[#2F3061] text-[#FFE66D]">
	<div class="border-solid Image Chapters">
		<div>
			<img src="/images/Manhwa.jpg" alt="Some" class="w-auto m-auto my-5 rounded-lg h-[30vh]" />
		</div>
		<div class="max-w-[20rem] flex flex-col items-center">

			<button class="p-2 mx-auto rounded-lg w-52 variant-outline-primary">Bookmark</button>

			<div class="flex justify-around px-10 py-2 my-2 rounded-md bg-[#7F7B82]">
				<Ratings bind:value={rating} max={5}>
					<svelte:fragment slot="empty"
						><iconify-icon icon="material-symbols:star-outline" /></svelte:fragment
					>
					<svelte:fragment slot="half"
						><iconify-icon icon="material-symbols:star-half-outline" /></svelte:fragment
					>
					<svelte:fragment slot="full"><iconify-icon icon="jam:star-full" /></svelte:fragment>
				</Ratings>
				<p class="ml-10">{rating}</p>
			</div>
			<div class="flex justify-around px-10 py-2 my-2 rounded-md bg-[#7F7B82]">
				<h1>Status:</h1>
				<p class="ml-10">{status}</p>
			</div>
			<div class="flex justify-around px-10 py-2 my-2 rounded-md bg-[#7F7B82]">
				<h1>Author:</h1>
				<p class="ml-10">{author}</p>
			</div>
		</div>
	</div>
	<div class="border-l border-solid Description Chapters">
		<div class="m-5">
      <h1 class="text-xl ">{title}</h1>
      <p>Synopsis {title}</p>
      <div class="p-2 my-2  h-[22rem]">
        {description}
      </div>
    </div>
	</div>
	<div class="border border-solid Chapters">
    <div>
      <button></button>
      <button></button>
    </div>
    <div class="flex flex-col mx-auto w-full h-[17.2rem] overflow-auto">
      <!-- Add {#each} block after rendering some manhwas -->
      <div class="p-2 m-5 border border-solid rounded-lg"><a href="/">Chapter {chapter}</a>
      <p class="text-xs text-[#7F7B82]">Date</p></div>
     
    </div>
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
			'Image Description'
			'Chapters Chapters';
	}

	.Chapters {
		grid-area: Chapters;
	}

	.Image {
		grid-area: Image;
	}

	.Description {
		grid-area: Description;
	}
</style>
