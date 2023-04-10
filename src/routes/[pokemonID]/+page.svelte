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

	//   console.log($data);
</script>

<!-- {JSON.stringify(data.data.abilities)} -->
<div>hello</div>
{JSON.stringify($query.data.abilities)}
