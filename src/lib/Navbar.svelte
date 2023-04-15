<script>
	$: isOpen = false;
</script>

<header class=" bg-gray-900 text-white sm:flex sm:justify-between">
	<div class="flex items-center justify-between px-5 py-3">
		<div><img class="h-8" src="/favicon.png" alt="Logo" /></div>
		<div class="sm:hidden">
			<button on:click={() => (isOpen = !isOpen)} class="flex"
				><img class="h-8 w-8" src="/menu-icon.svg" alt="" /></button
			>
		</div>
	</div>
	<div class=" {isOpen ? 'block' : 'hidden'} px-2 pt-2 pb-4 sm:flex">
		<a class="block text-white px-2 py-1 font-semibold rounded hover:bg-gray-700" href="/about"
			>About
		</a><a
			class="block text-white px-2 py-1 font-semibold rounded hover:bg-gray-700 sm:px-3"
			href="#"
			>شسی
		</a><a
			class="block text-white px-2 py-1 font-semibold rounded hover:bg-gray-700 sm:px-3"
			href="#"
			>شسی
		</a>
	</div>
</header>
