<script lang="ts">
	import { fetchDallE } from '../../api/axios';
	let discription = '';
	let count = 1;
	let images: any[] = [];
	const handleFetch = async () => {
		const { data } = await fetchDallE(discription, count);
		console.log(data);
		images = data;
		return data;
	};
</script>

<div>
	<form on:submit={handleFetch}>
		<label for="description">Describe the pic you Looking for:</label>
		<input bind:value={discription} type="text" name="description" />
		<label for="count"> Enter pics Count</label>
		<input bind:value={count} type="number" name="count" />
		<button class="bg-blue-700 rounded p-2" type="submit">Generate</button>
	</form>
	{#each images as img}
		<img class="w-56 h-56 object-cover" src={img.url} alt={discription} />
	{/each}

	<img src="" alt="" />
</div>
