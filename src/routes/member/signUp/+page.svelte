<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'; //A debug component to see the form data
	export let data;

    let { supabase } = data;
    $: ({ supabase } = data)

	const { form, errors, constraints, enhance, message } = superForm(data.form);

  let loadedData = []
  async function loadData() {
    const { data: result } = await data.supabase.from('test').select('*').limit(20)
    loadedData = result
  }

  $: if (data.session) {
    loadData()
  }
</script>


<!-- Be sure to remove this when deploying -->
<!-- Remember to ddd -->
<!-- <SuperDebug data={$form} /> -->

<section class="flex items-center justify-center h-screen">
	<div class="w-full max-w-2xl p-10 rounded-lg bg-slate-700">
		<form method="POST" class="m-5" action="?/new" use:enhance>
			<label for="name" class="text-white">Nickname</label>
			<input
				type="text"
				name="nickname"
				bind:value={$form.nickname}
                {...$constraints.nickname}
				class="block w-full p-2 mb-2 text-black border rounded-md"
			/> 
            {#if $errors.nickname}
                <p class="text-red-500">Nickname should be more than 3 letters</p>
            {/if}

			<label for="email" class="text-white">Email</label>
			<input
				type="email"
				name="email"
				bind:value={$form.email}
                {...$constraints.email}
				class="block w-full p-2 mb-2 text-black border rounded-md"
			/>
            {#if $errors.email}
                <p class="text-red-500">Email is not valid</p>
            {/if}

			<label for="password" class="text-white">Password</label>
			<input
				type="password"
				name="password"
				bind:value={$form.password}
                {...$constraints.password}
				class="block w-full p-2 mb-2 text-black border rounded-md"
			/>
            {#if $errors.password}
                <p class="text-red-500">Password should be more than 6 letters</p>
            {/if}

			<label for="passwordConfirm" class="text-white">Password Confirmation</label>
			<input
				type="password"
				name="passwordConfirm"
				bind:value={$form.passwordConfirm}
                {...$constraints.passwordConfirm}
				class="block w-full p-2 mb-2 text-black border rounded-md"
			/>
            {#if $message}
                <div class:success={$message.status == 'success'} class:error={$message.status == 'error'}>
									<p class="text-red-500">Passwords did not match</p>
								</div>
            {/if}

			<div class="mt-4">
				<button type="submit" class="w-full btn variant-outline-surface">Submit</button>
			</div>
		</form>
	</div>
</section>
<!-- 
<section class="flex flex-col items-center justify-center m-10">
    <h2 class="text-5xl">OAuth with GitHub</h2>
    <button class="w-[30%] p-5 bg-slate-700 rounded-lg" on:click={signInWithGithub}><iconify-icon icon="icon-park:github" class="text-2xl"></iconify-icon></button>
</section> -->
