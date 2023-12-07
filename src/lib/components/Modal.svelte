<script>
	let email = '';
	let password = '';
	let confirmPassword = '';
  let error = false
  let register = false

  function handleAuth() {
    if (!email || !password || (register && !confirmPassword)) {
      error = true
      return;
    }
  }

</script>

<div class="flex flex-col justify-center h-[20rem] p-10 rounded-lg center-this variant-filled-tertiary">
	<form action="">
		<h1 class="text-5xl text-center">{register ? 'Register' : 'Login'}</h1>
    {#if error}
    <p class="error">You do not seem to be in our database, please register</p>
    {/if}
    
		<label for="" class="relative border-2 border-blue-700 border-solid">
      <p class={email ? 'above': 'center'}>Email</p>
			<input 
        bind:value={email}
				type="email"
				placeholder="Email"
				class="w-full px-2 py-4 bg-transparent border-none focus:outline-none focus:border-none"
			/>
		</label>
		<label for="" class="relative border-2 border-blue-700 border-solid">
            <p class={password ? 'above': 'center'}>Password</p>
			<input
        bind:value={password}
				type="password"
				placeholder="Password"
				class="w-full px-2 py-4 bg-transparent border-none focus:outline-none focus:border-none"
			/>
		</label>
    {#if register}
		<label for="" class="relative border-2 border-blue-700 border-solid">
            <p class={confirmPassword ? 'above': 'center'}>Confirm Password</p>
			<input
        bind:value={confirmPassword}
				type="password"
				placeholder="Confirm Password"
				class="w-full px-2 py-4 bg-transparent border-none focus:outline-none focus:border-none"
			/>
		</label>
    {/if}
		<button
			type="btn"
			class="text-xl transition duration-200 btn variant-outline-success hover:variant-filled-warning"
			>Submit</button
		>
	</form>
  <div class="options">
    <p>Or</p>
    {#if register}
    <div>
      <p>Already have an account?</p>
      <button class="m-5 text-xl transition duration-200 btn variant-outline-success hover:variant-filled-warning" on:click={() => register = false}>Login</button>
    </div>
    {:else}
    <div>
      <p>Don't have an account?</p>
      <button class="m-5 text-xl transition duration-200 btn variant-outline-success hover:variant-filled-warning" on:click={() => register = true}>Register</button>
    </div>
    {/if}
</div>
</div>

<style>
	.center-this {
		height: 100vh;
		align-items: center;
	}

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
  /* Form Styles */
  form{
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  form,
  .options {
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
  }

  /* Tool Tip styles */
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
