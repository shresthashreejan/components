<script>
	import '../app.css';

	let { children } = $props();
</script>

<main class="flex p-4">
	<section class="sidebar flex w-2/12 flex-col">
		<a href="/" class="text-4xl">Components.</a>
		<div class="component-list flex flex-col py-4">
			<a href="/infinitescroller" class="text-xl">Infinite Scroller</a>
			<a href="/fileinput" class="text-xl">File Input</a>
		</div>
	</section>
	<section class="main-container w-10/12 p-4">
		<div>{@render children()}</div>
	</section>
</main>
