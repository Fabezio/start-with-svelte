<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function sayHello() {
        dispatch("greetings", {
            // title: "from source",
            text: "Hello!",
        });
    }
</script>

<button
    on:mouseover={sayHello}
    on:mouseleave={() => dispatch("goodbye", { text: "goodbye." })}
>
    Click to say hello
</button>
