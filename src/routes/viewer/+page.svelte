<script lang="ts">
	async function loadComponent() {}

	$effect(() => {
		loadComponent();
	});
</script>

<main class="viewer-container flex flex-col">
	<div class="top-container overflow-auto"></div>
	<div class="bottom-container flex-grow overflow-auto px-4">
		<header class="text-4xl">Placeholder</header>
	</div>
</main>

<style>
	.viewer-container {
		min-height: calc(100vh - 2rem);
		overflow-y: auto;
	}
</style>
