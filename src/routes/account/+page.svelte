<script>
    export let data;
</script>

<div>
    <ul>
    {#each data.test as item}
        <li>{item.first_name}, {item.last_name}</li>
        {/each}
    </ul>
</div>