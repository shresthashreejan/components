<script lang="ts">
	let data = $props();
	let cmp = $state(JSON.parse(JSON.stringify(data)).data.component.apiName);
	let loadedComponent: any = $state([]);

	async function importComponent() {
		const module = await import(`$lib/components/${cmp}/${cmp}.svelte`);
		loadedComponent.push(module.default);
	}

	$effect(() => {
		importComponent();
	});
</script>

<main class="viewer-container flex flex-col">
	<div class="top-container overflow-auto">
		{#if loadedComponent}
			{#each loadedComponent as component}
				<svelte:component this={component} />
			{/each}
		{/if}
	</div>
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
