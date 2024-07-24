<script lang="ts">
	import '../app.css';
	import componentData from '$lib/data/components.json';
	let { children } = $props();
</script>

<main>
	<div class="main-container flex w-full">
		<nav class="sidebar flex flex-col gap-4 py-4 pl-4">
			<div class="text-5xl">Components.</div>
			<div class="component-list flex flex-col">
				{#each componentData as component}
					<div class="text-xl">{component.componentName}</div>
				{/each}
			</div>
		</nav>
		<div class="w-full">
			{@render children()}
		</div>
	</div>
</main>
