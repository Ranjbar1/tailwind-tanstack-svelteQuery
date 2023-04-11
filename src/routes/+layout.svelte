<script>
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import '../app.css';
	// import { dev } from '$app/environment';
	// import { inject } from '@vercel/analytics';
	// inject({ mode: dev ? 'development' : 'production' });
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<title>svelte-query app</title>
	<div class="bg-slate-200 h-full absolute w-full">
		<slot />
	</div>
</QueryClientProvider>
