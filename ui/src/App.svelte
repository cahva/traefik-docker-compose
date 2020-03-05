<script>
	export let name;
	let promise;


	async function fetchData() {
		const res = await fetch(`/api/tag`);
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}

	async function handleClick() {
		promise = fetchData();
	}
</script>

<main>
	<h1>Hello there {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>


	<h2>Tags from api</h2>
	<p>
		<button on:click={handleClick}>Fetch data</button>
	</p>
	{#await promise}
		<p>Fetching from api...</p>
	{:then data}
		{#if data}
			<h3>Data</h3>
			<code>{data}</code>
		{/if}

	{:catch error}
		<p>Something went wrong: {error.message}</p>
	{/await}
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