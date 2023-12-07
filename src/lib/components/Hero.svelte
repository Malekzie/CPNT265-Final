<script>
	// import { browser } from '$app/environment';
	// // import { onMount } from 'svelte';
	// // import Modal from './Modal.svelte';

	import Carousel from "./Carousel.svelte";

	// // onMount(() => {
	// // 	if (browser) {
	// // 		let modal = document.getElementById('modal');

	// // 		const openModal = function () {
	// // 			modal.showModal();
	// // 		};
	// // 		setTimeout(openModal, 1000);
	// // 	}
	// // });




</script>

<section>
	<div class="w-[95%] flex">
		<!-- Carousel Hero -->
		<div class="h-[20rem] w-[70%] mx-auto m-5 rounded-lg bg-slate-700 flex justify-between">
			<!-- Larger Container -->
			<div class="w-[50%] h-[90%] my-4 ml-4 bg-green-500 rounded-tl-lg rounded-bl-lg">
        <Carousel />
			</div>
      
			<!-- Smaller Container -->
			<div
				class="w-[50%] h-[90%] my-4 mr-4 bg-green-500 rounded-tr-lg rounded-br-lg border-l-2 border-solid border-black overflow-auto"
			>
				<div class="flex flex-col justify-end" />
			</div>
		</div>
	</div>

	<button />
</section>

<!-- <dialog id="modal" class="rounded-lg">
  <Modal />
</dialog> -->
