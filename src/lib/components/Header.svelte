<script lang="ts">
import { popup } from '@skeletonlabs/skeleton';
import type { PopupSettings } from '@skeletonlabs/skeleton';

const popupFocusBlur: PopupSettings = {
	event: 'focus-blur',
	target: 'popupFocusBlur',
	placement: 'bottom'
};
// Function that detects the Enter key press
function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
    }
  }
</script>

<section>
    <div class="relative">
      <input type="text" placeholder="Search" class="input w-[95%] pl-8 m-5 bg-transparent border rounded-xl outline-none border-primary-500" use:popup={popupFocusBlur} on:keydown={handleKeyDown}>
      
<div class="p-4 card variant-filled-surface" data-popup="popupFocusBlur">
	<p>Shows on focus, hides on blur.</p>
	<div class="arrow variant-filled-surface" />
</div>
					
    </div>
</section>