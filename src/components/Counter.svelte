<script>
    let count = 0;
    $: countX2 = count*2

    
    
</script>

<p>{count}</p>
<p>{countX2 > 20 ? countX2 -=20 : countX2}</p>
<button on:click={()=>count++}>incrémenter</button>

<style>
    button {
        padding: 0.7rem 1rem;
        text-transform: uppercase;
        color: whitesmoke;
        background-color: navy;
        text-shadow: 1px 1px black;
        border-radius: 7px;
    }
</style>
