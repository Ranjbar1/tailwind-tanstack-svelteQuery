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

<div class="flex justify-center items-center mt-20 bg-rose-400">
	<div class="bg-red-300 w-[60%] px-4 mb-20">


		<div class="hero min-h-screen bg-base-200">
			<div class="hero-content flex-col lg:flex-row">
			  <img src={$query.data.sprites.front_default} alt=""  class="max-w-sm rounded-lg shadow-2xl" />
			  <div>
				<!-- <h1 class="text-5xl font-bold">Box Office News!</h1> -->
				{#each $query.data.forms as form, index}
				<p class="py-6">{form.name}</p>
			{/each}
			  </div>
			</div>
		  </div>
		<!-- <div class="flex justify-center items-center">
			<h1 id="pokemons-name" class="font-bold">
				{#each $query.data.forms as form, index}
					<p class="py-6">{form.name}</p>
				{/each}
			</h1>
			<img class=" object-cover w-[80%]" src={$query.data.sprites.front_default} alt="" />
		</div> -->
		{#each $query.data.abilities as { ability, is_hidden, slot }, index}
			<div class="flex w-[26%]">
				<span class="font-bold">Ability: </span>
				<span class="ml-2"> {ability.name}</span>
			</div>

			<div class="flex w-[26%]">
				<span class="font-bold">is Hidden : </span>
				<span class="ml-2"> {is_hidden}</span>
			</div>
		{/each}

		<div class="flex w-[30%]">
			<span class="font-bold">BAse base_experience: </span>
			<span class="ml-2"> {$query.data.base_experience}</span>
		</div>

		<div class="my-8">
			{#each $query.data.stats as { stat: { name }, base_stat, effort }, index}
				<div id="Progress Bar" class="flex items-center my-2">
					<div class="w-[20%] text-base font-medium">{name} :</div>
					<div class="w-full bg-gray-200 rounded-full h-2.5">
						<div
							class="bg-blue-600 h-2.5 rounded-full"
							style={`width: ${base_stat > 100 ? 100 : base_stat}%`}
						/>
					</div>
				</div>

				<!-- <p>{effort}:X</p> -->
			{/each}
		</div>

		<table class="w-full text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th scope="col" class="px-6 py-3"> Game Index </th>
					<th scope="col" class="px-6 py-3"> Version </th>
					<th scope="col" class="px-6 py-3"> Details </th>
				</tr>
			</thead>
			{#each $query.data.game_indices as { game_index, version: { name, url } }, index}
				<tbody>
					<!-- <div class="flex justify-between my-4">
				<div>	<span>Game Index:</span> {   Number(game_index)    }
				</div>
			
						<span> Version : {name}  </span>
						
				</div> -->

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
