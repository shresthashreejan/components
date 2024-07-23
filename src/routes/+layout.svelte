<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main>
	<div class="main-container flex w-full">
		<nav class="sidebar flex flex-col gap-4 py-4 pl-4">
			<div class="text-5xl">Components.</div>
			<div class="component-list flex flex-col">
				<div class="text-xl">Component 1</div>
				<div class="text-xl">Component 2</div>
				<div class="text-xl">Component 3</div>
			</div>
		</nav>
		<div class="w-full">
			{@render children()}
		</div>
	</div>
</main>
