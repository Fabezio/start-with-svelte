<script>
	import MyCompo from "./components/MyCompo.svelte"
	import Counter from "./components/Counter.svelte"
	let string = "this is a single <mark>string</mark>"
	export let name;
	export let appname;
	
</script>

<svelte:head><title>{appname}</title></svelte:head>
<main>
	<h1>{appname}</h1>
	<h2>Bonjour, {name}!</h2>
	<!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	<img src="logo-svelte.jpeg" alt="logo">
	<MyCompo />
	<p>{@html string}</p>
	<Counter />	
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #003eff;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>