<script>
	// @ts-nocheck

	import { createQuery } from '@tanstack/svelte-query';
	import { getPokemon } from '../../../api/queries';
	/** @type {import('./$types').PageData} */
	export let data;

	const query = createQuery({
		queryKey: ['pokemon'],

		queryFn: async () => await getPokemon(data.id),
		initialData: data.data
	});
	console.table($query.data);
</script>

<div class="flex sm:w-4/5 px-2 mx-auto justify-center">
	<div class="w-4/5">
		<div class="bg-base-200">
			<div class="lg:flex-row">
				<img
					src={$query.data.sprites.front_default}
					alt=""
					class="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					{#each $query.data.forms as { name }}
						<p class="py-1">{name}</p>
					{/each}
				</div>
			</div>
		</div>

		{#each $query.data.abilities as { ability }}
			<div class="flex">
				<span class="font-bold">Ability: </span>
				<span class="ml-2"> {ability.name}</span>
			</div>
		{/each}

		<div class="my-8">
			{#each $query.data.stats as { stat: { name }, base_stat }}
				<div id="Progress Bar" class="my-2">
					<div class=" min-w-fit font-medium">{name}:</div>
					<div class="w-full bg-gray-200 rounded-full h-2.5">
						<div
							class="bg-gray-600 h-2.5 rounded-full"
							style={`width: ${base_stat > 100 ? 100 : base_stat}%`}
						/>
					</div>
				</div>
			{/each}
		</div>

		<table class="w-fit text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th scope="col" class="px-6 py-3"> Game Index </th>
					<th scope="col" class="px-6 py-3"> Version </th>
					<th scope="col" class="px-6 py-3"> Details </th>
				</tr>
			</thead>
			{#each $query.data.game_indices as { game_index, version: { name, url } }}
				<tbody>
					<tr class="bg-white dark:bg-gray-800">
						<td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							{Number(game_index)}
						</td>
						<td class="px-6 py-4">
							{name}
						</td>
						<td class="px-6 py-4">
							<a
								href={url}
								class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
								>go to version</a
							>
						</td>
					</tr>
				</tbody>
			{/each}
		</table>
	</div>
</div>
