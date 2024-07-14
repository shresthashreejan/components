<script>
	import '../app.css';

	let { children } = $props();
</script>

<main class="flex p-4">
	<section class="sidebar flex w-2/12 flex-col border-r-2">
		<a href="/" class="text-4xl">Components.</a>
		<div class="component-list flex flex-col py-4">
			<a href="/infinitescroller" class="text-xl transition-opacity hover:opacity-60"
				>Infinite Scroller</a
			>
			<a href="/fileinput" class="text-xl transition-opacity hover:opacity-60">File Input</a>
		</div>
	</section>
	<section class="main-container w-10/12">
		<div>{@render children()}</div>
	</section>
</main>

<style>
	.sidebar {
		max-height: 100vh;
		overflow-y: auto;
	}

	.main-container {
		min-height: calc(100vh - 2rem);
		overflow-y: auto;
	}
</style>
