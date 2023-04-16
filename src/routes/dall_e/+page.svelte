<script lang="ts">
	import { fetchDallE } from '../../api/axios';
	let discription = '';
	let count = 1;
	let images: any[] = [];
	const handleFetch = async () => {
		const { data } = await fetchDallE(discription, count);
		console.log(data);
		images = [...images, ...data];
		return data;
	};
</script>

<main>
	<form
		class=" bg-blue-200 font-semibold rounded-lg shadow-blue-200 shadow-sm mb-4 py-2 px-4"
		on:submit={handleFetch}
	>
		<label for="description">Describe the pic you Looking for:</label>
		<input
			bind:value={discription}
			type="text"
			class="mx-2 font-normal rounded px-2"
			name="description"
		/>
		<label for="count"> Enter pics Count</label>
		<input
			bind:value={count}
			class="rounded text-center mx-2"
			type="number"
			max="5"
			min="0"
			name="count"
		/>
		<button class="text-white bg-blue-700 rounded px-2 py-1" type="submit">Generate</button>
	</form>
	<div
		class={` flex justify-around rounded-lg shadow-lg   my-auto min-h-full  overflow-hidden border-gray-700`}
	>
		{#each images as img}
			<img
				class="w-56 h-56 my-4 overflow-hidden rounded-lg m-1 shadow-sm object-cover"
				src={img.url}
				alt={discription}
			/>{/each}
	</div>
</main>
