<script>
    async function signOut() {
  const { error } = await supabase.auth.signOut()
}
</script>

<section>
    <div class="align-middle border-t border-solid bg-slate-700">
        <ul class="flex flex-row justify-center gap-10">
            <a href="/" class="p-5 transition delay-75 border border-solid hover:scale-105">
                <li>Subscribed</li>
            </a><a href="/" class="p-5 transition delay-75 border border-solid hover:scale-105">
                <li>Comments</li>
            </a><a href="/" class="p-5 transition delay-75 border border-solid hover:scale-105">
                <li>Creators</li>
            </a><a href="/" class="p-5 transition delay-75 border border-solid hover:scale-105">
                <li>Account</li>
            </a>
            <li>
                <button class="p-5 transition delay-75 border border-solid hover:scale-105" on:click={signOut}>Logout</button>
            </li>
        </ul>
    </div>
</section>
