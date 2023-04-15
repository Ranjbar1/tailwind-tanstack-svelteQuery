<script>
	$: isOpen = false;
</script>

<header class=" bg-gray-900 text-white sm:flex sm:justify-between lg:px-5">
	<div class="flex items-center justify-between px-5 py-3">
		<div class="cursor-pointer">
			<a href="/"><img class="h-8 lg:h-12" src="/favicon.png" alt="Logo" /></a>
		</div>
		<div class="sm:hidden">
			<button on:click={() => (isOpen = !isOpen)} class="flex"
				><img class="h-8 w-8" src="/menu-icon.svg" alt="" /></button
			>
		</div>
	</div>
	<div
		class=" {isOpen
			? 'block'
			: 'hidden'} px-2 pt-2 pb-4 sm:flex lg:items-center lg:mx-12 lg:font-extrabold lg:text-lg"
	>
		<a
			class="block text-white px-2 py-1 font-semibold rounded hover:bg-gray-700 sm:px-3"
			href="/pokemon"
			>Pokemons
		</a><a class="block text-white px-2 py-1 font-semibold rounded hover:bg-gray-700" href="/about"
			>About
		</a><a
			class="block text-white px-2 py-1 font-semibold rounded hover:bg-gray-700 sm:px-3"
			href="https://github.com/Ranjbar1/tailwind-tanstack-svelteQuery"
			target="_blank"
			>GitHub
		</a>
	</div>
</header>
