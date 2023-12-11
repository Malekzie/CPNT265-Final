<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings, ModalSettings } from '@skeletonlabs/skeleton';

	const popupFocusBlur: PopupSettings = {
		event: 'focus-blur',
		target: 'popupFocusBlur',
		placement: 'bottom'
	};
	// Function that detects the Enter key press

	function handleKeyDown(event: KeyboardEvent) {
		console.log('Hey');
	}

	
</script>

<section class="flex justify-between bg-slate-700">
	<!-- Logo -->
	<div>
		<a href="/">
			<img src="/images/logo.png" alt="logo" class="w-[4rem] h-auto m-5" />
		</a>
	</div>
	<!-- Nav -->
	<div class="my-10">
		<ul class="flex gap-5">
			<a href="/genres">
				<li>Genre</li>
			</a><a href="/bookmarks">
				<li>Bookmarks</li>
			</a><a href="/recruitment">
				<li>Recruitment</li>
			</a>
		</ul>
	</div>
	<!-- Search -->
	<div class="relative mt-3">
		<input
			type="text"
			placeholder="Search"
			class="input w-[30rem] p-auto m-5 bg-transparent border rounded-xl outline-none border-primary-500"
			use:popup={popupFocusBlur}
			on:keydown={handleKeyDown}
		/>

		<div class="p-4 card variant-filled-surface" data-popup="popupFocusBlur">
			<p>Shows on focus, hides on blur.</p>
			<div class="arrow variant-filled-surface" />
		</div>
		<!-- Icons -->
	</div>
	<div class="m-5 text-3xl">
		<div class="mt-3">
			<a href="/member">
            <iconify-icon icon="gg:profile" />
			</a>
			<a href="/settings">
				<iconify-icon icon="material-symbols:settings" />
			</a>
		</div>
	</div>
</section>
