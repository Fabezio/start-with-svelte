<script>
    import Inner from "./Inner.svelte";

    function handleMessage(event) {
        alert(event.detail.text);
    }
</script>

<Inner on:greetings={handleMessage} on:goodbye={(e) => alert(e.detail.text)} />
