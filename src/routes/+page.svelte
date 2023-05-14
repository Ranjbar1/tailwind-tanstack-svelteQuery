<script>
	import Map from '$lib/Map.svelte';
	import { fetchDallE } from '../api/axios';
	import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-svelte';
	import VisitorData from '../lib/VisitorData.svelte';

	const options = {
		loadOptions: {
			apiKey: 'SWFalo2OEu5sJpivNFdu'
		}
	};
</script>

<div class="mb-20">
	<div
		class="flex flex-col lg:flex-row-reverse justify-around rounded-xl
         shadow-lg"
	>
		<img src="/favicon.png" alt="hero" />
		<div>
			<h1>Wellcom</h1>
			<span>desc</span>
			<a href="/pokemon" class="shadow-lg"> Explore Pokemons!</a>
		</div>
	</div>

	<div class="flex min-w-full my-auto mt-10 flex-col sm:flex-row sm:justify-evenly gap-4">
		<div class=" shadow-2xl p-2 pl-4 flex flex-col rounded-lg sm:w-1/3 font-semibold">
			<img class="self-center" src="/favicon.png" alt="" />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae modi vel deleniti odit
				magni perspiciatis accusamus rem fuga ut reprehenderit.
			</p>
		</div>
		<div class=" shadow-2xl p-2 pl-4 flex flex-col rounded-lg sm:w-1/3 font-semibold">
			<img class="self-center" src="/favicon.png" alt="" />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae modi vel deleniti odit
				magni perspiciatis accusamus rem fuga ut reprehenderit.
			</p>
		</div>
		<div class=" shadow-2xl p-2 pl-4 flex flex-col rounded-lg sm:w-1/3 font-semibold">
			<img class="self-center" src="/favicon.png" alt="" />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae modi vel deleniti odit
				magni perspiciatis accusamus rem fuga ut reprehenderit.
			</p>
		</div>
		<div class=" shadow-2xl p-2 pl-4 flex flex-col rounded-lg sm:w-1/3 font-semibold">
			<img class="self-center" src="/favicon.png" alt="" />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae modi vel deleniti odit
				magni perspiciatis accusamus rem fuga ut reprehenderit.
			</p>
		</div>
	</div>
	<section class="bg-white rounded-lg flex flex-col items-center my-16 shadow-lg">
		<div>
			<img src="/favicon.png" alt="" />
		</div>
	</section>
	<!-- <section class="my-5 border rounded-lg overflow-hidden shadow-lg"><Map /></section> -->
</div>
<section>
	<FpjsProvider {options}>
		<VisitorData />
	</FpjsProvider>
</section>
