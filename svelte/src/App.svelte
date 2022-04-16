<script>
	export let name;
	export let website;

	let a = 1;
	let b = 2;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href={website}> Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p> lets tets by bulding very simple site </p>
	<br/><br/>
	<input type="number" bind:value={a}>
<input type="number" bind:value={b}>

<p>Dodawanie: {a} + {b} = {a + b}</p>
<p>Mnożenie: {a} * {b} = {a * b}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
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