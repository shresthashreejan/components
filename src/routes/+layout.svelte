<script lang="ts">
	import '../app.css';
	import type { ComponentInfo } from '$lib/types/types';
	import { fetchComponentData } from '$lib/data/Components.svelte';

	let { children } = $props();
	let componentsData: ComponentInfo[] = $state([]);

	async function loadComponentList() {
		componentsData = await fetchComponentData();
	}

	$effect(() => {
		loadComponentList();
	});
</script>

<main class="flex p-4">
	<section class="sidebar flex w-2/12 flex-col border-r-2">
		<a href="/" class="text-4xl">Components.</a>
		<div class="component-list flex flex-col py-4">
			{#each componentsData as item}
				<a href="/viewer/{item.apiName}" class="text-xl transition-opacity hover:opacity-60"
					>{item.componentName}</a
				>
			{/each}
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
