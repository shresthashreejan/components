<script lang="ts">
	import type { ComponentInfo } from '$lib/types/types';
	import { traverseDirectory } from '$lib/data/Components.svelte';

	let componentsData: ComponentInfo[] = [];

	async function loadComponents() {
		componentsData = await traverseDirectory();

		const loadedComponents: ComponentInfo[] = [];
		for (const { apiName } of componentsData) {
			const module = await import(`$lib/components/${apiName}/${apiName}.svelte`);
			loadedComponents.push(module.default);
		}
		console.log(loadedComponents);
	}

	$effect(() => {
		loadComponents();
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
