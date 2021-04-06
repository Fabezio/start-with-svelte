<script>
    // import App from "../App.svelte";
    // import Button from './'
    // import { Fraction } from "fraction.js";
    import { Fractionalize, FractionalizeOptions } from "fractionalize";
    // console.log(Fraction);
    // import { beforeUpdate, afterUpdate } from "svelte";
    // console.log(foo);
    let text = "";
    let sub = "";
    let a = "1";
    let b = "1";

    $: formula = sub.includes("+") ? sub.split("x+") : sub.split("x");
    // $:
    $: console.log("variables:", formula.length);
    $: a = formula[0];
    $: if (!sub.includes("x")) {
        a = "0";
        b = formula[0];
        console.log(formula.length);
    } else {
        b = formula[1];
    }

    $: if (
        sub.length == sub.indexOf("x") + 1 ||
        (sub.length == sub.indexOf("x") + 1 && formula.length == 1)
    )
        b = "0";
    // $: if()
    // $: if( b.hasIndex("+") b.shift("+"))
    $: a = a == "" ? "1" : a;
    $: a = a == "-" ? "-1" : a;
    // $: if (formula.length == 1) b = "0";
    $: b = b == "" ? "1" : b;
    $: a = parseInt(a);
    $: b = parseInt(b);
    $: x = -b / a;
    // $: if (typeof x == "object") x = new Fraction(-b, a);
</script>

<form on:submit|preventDefault={() => (sub = text)}>
    <input bind:value={text} type="text" placeholder="entre la formule" />
    <button type="submit">Convertir</button>
</form>
<!-- <p>{sub}</p> -->
<!-- <p>{sub.length}</p> -->
{#if sub.length > 0}
    <p>
        <!-- {formula}<br /> -->
        <!-- {typeof x} -->
        a={a}<br />
        b={b}<br />
    </p>
{/if}
{#if a != 0}
    <p>
        Pour a ≠ 0 et {sub}=0<br />

        <span class="green">x={Fractionalize(x)}</span>
    </p>
{:else if (a && a == 0) || (!a && b > 0)}
    <p class="red">Division par 0</p>

    <!-- {/if} -->
{/if}

<style>
    input {
        border: 1px solid grey;

        padding: 0.5rem;
    }
    button {
        text-transform: uppercase;
        background: #077;
        color: whitesmoke;
        font-weight: 300;
        letter-spacing: 1px;
    }

    .green {
        color: green;
    }
    .red {
        color: red;
    }
</style>
