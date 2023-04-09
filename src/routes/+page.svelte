<script>
	import { createQuery } from '@tanstack/svelte-query';
	import getAllPokemons from '../api/queries';
	const query = createQuery({
		queryKey: ['allPokemons'],
		queryFn: getAllPokemons
	});
	// console.log($query.data.results);
</script>

<div class="text-center">
	<h1 class="font-bold">HERE`s Pokemons</h1>
	{#if $query.isLoading}
		<h1>LOADING...</h1>
	{:else if $query.status === 'success'}
		<ul class="text-center text-gray-700">
			{#each $query.data.results as { name, url }, index}
				<li class="font-bold">{index + 1} : {name}</li>
				<a class="bg-orange-200 text-violet-500 border-emerald-300 border rounded-xl p-1" href={url}
					>Go to {name}</a
				>
			{/each}
		</ul>
	{:else}<p>just right!</p>{/if}
</div>
