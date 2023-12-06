<script>
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
</script>

<section class="w-[15em] border-r border-solid h-screen">
  <div class="h-full">

    <h2 class="p-5 text-5xl text-center"><a href="/">Sidebar</a></h2>
    <div class="">
      <div class="flex flex-col gap-5 text-xl">
        <!-- Genre Dropdown -->
        <button class="p-2 m-5 rounded-lg bg-[#FFE66D] text-[#2F3061]" on:click={toggleDropdown}>
          Genre
        </button>
        {#if isDropdownOpen}
        <ul class="relative flex flex-col gap-2 mx-auto drop text-[#2F3061]">
          <a href="/">
            <li class="p-5 text-center rounded-lg bg-[#FFE66D]">Action</li>
          </a><a href="/">
            <li class="p-5 text-center rounded-lg bg-[#FFE66D]">Adventure</li>
          </a><a href="/">
            <li class="p-5 text-center rounded-lg bg-[#FFE66D]">Magic</li>
          </a><a href="/">
            <li class="p-5 text-center rounded-lg bg-[#FFE66D]">Slice of life</li>
          </a><a href="/">
            <li class="p-5 text-center rounded-lg bg-[#FFE66D]">Science Fiction</li>
          </a>
        </ul>
        {/if}
        <!-- Other Links -->
        <a href="/" class="mx-auto">Library</a>
      </div>
    </div>
    <div class="flex flex-col items-center gap-5 mt-10 text-3xl">
      <a href="/"><iconify-icon icon="gg:profile"></iconify-icon></a>
      <a href="/"><iconify-icon icon="material-symbols:settings"></iconify-icon></a>
    </div>
  </div>
  <!-- Settings -->
</section>

<style>
  .drop li{
    animation: myAnim 0.5s ease-in 0s 1 normal forwards;
  }

  @keyframes myAnim {
	0% {
		animation-timing-function: ease-in;
		opacity: 0;
		transform: translateY(-250px);
	}

	38% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0);
	}

	55% {
		animation-timing-function: ease-in;
		transform: translateY(-65px);
	}

	72% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	81% {
		animation-timing-function: ease-in;
		transform: translateY(-28px);
	}

	90% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	95% {
		animation-timing-function: ease-in;
		transform: translateY(-8px);
	}

	100% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}
}
</style>