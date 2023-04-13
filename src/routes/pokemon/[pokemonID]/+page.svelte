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
</script>

<!-- {JSON.stringify(data.data.abilities)} -->
<div>hello</div>
<!-- {JSON.stringify($query.data.abilities)} -->
{#each $query.data.abilities as { ability, is_hidden, slot }, index}
	<hr />
	<span>ability:</span>
	{ability.name}
	<span>is Hidden : {is_hidden} </span>
{/each}
<ul class="font-bold">
	{#each $query.data.forms as form, index}
		<li>{form.name}</li>
	{/each}
</ul>

<span> BAse base_experience:: </span>{$query.data.base_experience}

{#each $query.data.game_indices as { game_index, version: { name, url } }, index}
	<span>gameIndex :: </span>{game_index}
	<hr />
	<!-- {JSON.stringify(version)} -->
	<li>
		<div>
			<span>{name}</span>
			<a href={url}>go to version</a>
		</div>
	</li>
{/each}
