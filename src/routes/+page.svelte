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
	
	{#if $query.isLoading}
		<h1>LOADING...</h1>
	{:else if $query.status === 'success'}
		<ul class="text-center sm:flex flex-wrap flex-1 flex-grow text-gray-700">
			{#each $query.data.results as { name, url }, index}
				<li>
					<div class="px-10 py-5 m-1 rounded-2xl border shadow-md">
						<div class="font-bold inline-block ">{name}</div>
						<a class="inline-block hover:bg-orange-500 hover:text-gray-950 hover:border-1 bg-gray-800 text-white border-emerald-300 border-2 rounded-xl p-1" href={name}
							>Go to {name}</a
						>
					</div>
				</li>
			{/each}
		</ul>
	{:else}<p>just right!</p>{/if}
</div>
