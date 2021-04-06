<script>
	import MyCompo from "./components/MyCompo.svelte";
	import Mouse from "./components/Mouse.svelte";
	import Counter from "./components/Counter.svelte";
	import Calculator from "./components/Calculator.svelte";
	import Card from "./components/Card.svelte";
	import Dispatch from "./components/Dispatch.svelte";
	import Form from "./components/Form.svelte";
	import Ortho from "./components/Ortho.svelte";
	// import MyChart from "./components/MyChart.svelte";
	let string = "this is a single <mark>string</mark>";
	export let name;
	export let appname;
	const msg = {
		title: "Test",
		author: "Dupont",
		content: "Ceci est un test",
		date: new Date() * 0.99,
	};

	const msg2 = {
		title: "Nouveau message",
		content: "Si ça marche je me présente aux présidentielles!",
		author: "Fabezio",
		date: new Date() - 1000000,
	};
	const msg3 = {
		title: "Rebelote",
		content: "Ben ça marche, on dirait...",
		author: "Fabezio",
		date: new Date(),
	};

	const messages = [msg, msg2, msg3, msg2];
	// console.table(messages);
</script>

<svelte:head><title>{appname}</title></svelte:head>
<main>
	<h1>{appname}</h1>
	<h2>Bonjour, {name}!</h2>
	<Ortho />
	<Form />
	<!-- <Dispatch /> -->
	<!-- <Mouse /> -->
	<!-- <MyChart /> -->
	<!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	<!-- <img src="logo-svelte.jpeg" alt="logo" /> -->
	<!-- <MyCompo /> -->
	<button on:click|once={() => alert("c'est la dernière fois!")}
		>Clique ici</button
	>
	<p>{@html string}</p>
	<div class="card-deck">
		{#each messages as message}
			<!-- <Card {...message} /> -->
		{/each}

		<!-- {messages.map(message => <Card {...message}/>)} -->
		<!-- 		
		<Card {...msg} />
		<Card {...msg2} />
		<Card {...msg2} />
		<Card {...msg3} />
		<Card {...msg3} /> -->
		<!-- <Card {...msg3} /> -->
	</div>
	<hr />
	<!-- <Calculator /> -->
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

	button {
		background: blue;
		color: whitesmoke;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	.card-deck {
		display: flex;
		/* min-width: 1000px; */
		/* max-width: 1000px; */
		flex-wrap: wrap;
		justify-content: center;
		margin: 0 2rem;
		padding: 0 2rem;
	}
</style>
