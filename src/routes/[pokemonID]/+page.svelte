<script>
	// @ts-nocheck

	import { createQuery } from '@tanstack/svelte-query';
	import { getPokemon } from '../../api/queries';
	/** @type {import('./$types').PageData} */
	export let data;

	const query = createQuery({
		queryKey: ['pokemon'],

		queryFn: async () => await getPokemon(data.id),
		initialData: data.data
	});
	const { abilities, forms, base_experience, game_indices } = $query.data;
	// console.log(abilities);
	// console.log(forms);
	// console.log(base_experience);
	// console.log(game_indices);
</script>

<!-- {JSON.stringify(data.data.abilities)} -->
<div>hello</div>
{JSON.stringify($query.data.abilities)}
{#each abilities as { ability, is_hidden, slot }, index}
	<hr />
	<span>ability:</span>
	{ability.name}
{/each}
<ul class="font-bold">
	{#each forms as form, index}
		<li>{form.name}</li>
	{/each}
</ul>


<span> BAse base_experience:: </span>{base_experience}

{#each game_indices as {game_index,version} ,index }
<span>gameIndex :: </span>{game_index}
<hr>
{JSON.stringify(version)}
	
{/each}