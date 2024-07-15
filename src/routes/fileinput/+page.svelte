<script lang="ts">
	import FileInput from '$lib/components/FileInput/FileInput.svelte';
</script>

<main class="viewer-container flex flex-col">
	<div class="top-container overflow-auto">
		<FileInput />
	</div>
	<div class="bottom-container flex-grow overflow-auto px-4">
		<header class="text-4xl">File Input</header>
	</div>
</main>

<style>
	.viewer-container {
		min-height: calc(100vh - 2rem);
		overflow-y: auto;
	}
</style>
