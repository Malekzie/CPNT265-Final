<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;
	// Props

	const modalStore = getModalStore();
	
	// Logic Data
	let error = false;
	let register = false;
	const formData = {
		email : '',
		password : '',
		confirmPassword : '',
	};


	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4';

  // Database Logic

</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>{$modalStore[0].title ?? 'Luminere Scans'}</header>
		<article>{register ? 'Join us!' : 'Login'}</article>
		{#if error}
			<p class="error">We seem to be unable to find you, why not register and join us</p>
		{/if}
		<!-- Enable for debugging: -->
		<form class="modal-form {cForm}" method="POST" action="/account">
			<label class="label">
				<span class={formData.email ? 'above' : 'center'}>Email</span>
				<input class="input" bind:value={formData.email} type="email" placeholder="Enter email address..." />
			</label>
			<label class="label">
				<span class={formData.password ? 'above' : 'center'}>Password</span>
				<input bind:value={formData.password} class="input" type="text" placeholder="Enter password..." />
			</label>
			{#if register}
			<label class="label">
				<span class={formData.confirmPassword ? 'above': 'center'}>Confirm Password</span>
				<input bind:value={formData.confirmPassword} class="input" type="tel" placeholder="Confirm Password..." />
			</label>
			{/if}
		</form>
		<div class="options">
			<p>Or</p>
			{#if register}
    <div>
      <p>Already have an account?</p>
      <button class="m-5 text-xl transition duration-200 btn variant-outline-error hover:variant-filled-error" on:click={() => register = false}>Login</button>
    </div>
    {:else}
    <div>
      <p>Don't have an account?</p>
      <button class="m-5 text-xl transition duration-200 btn variant-outline-success hover:variant-filled-success" on:click={() => register = true} formaction="?/register" >Register</button>
    </div>
    {/if}
		</div>

		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit</button>
    </footer>
	</div>
{/if}

<style>
	
  .above,
  .center {
    position: absolute;
    transform: translateY(-50%);
    pointer-events: none;
    color: white;
    border-radius: 4px;
    padding: 0 6px;
    font-size: 0.8rem;
  }

	.above{
    top: 0;
    left: 24px;
    border: 1px solid #2196f3;
    font-size: 0.7rem;
  }

  .center{
    top: 50%;
    left: 6px;
    border: 1px solid #2196f3;
    opacity: 0;
  }

  /* Error Message */
  .error{
    color: red;
    font-size: 0.9rem;
    text-align: center;
  }
  
  /* Register Section */
  .options{
    padding: 14px 0;
    overflow: hidden;
    font-size: 0.9rem;
  }

  .options > p {
    position: relative;
    text-align: center;
    width: fit-content;
    margin: 0 auto;
    padding: 0 8px;
  }

  .options > p::after,
  .options > p::before {
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    width: 100vw;
    height: 1.5px;
    background-color: white;
  }

  .options > p::after {
    right: 100%;
  }

  .options > p::before {
    left: 100%;
  }

  .options div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
  }

  .options div p:last-of-type {
    color: cyan;
    cursor: pointer;
  }
</style>