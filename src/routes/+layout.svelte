<script lang="ts">
	import '../app.css';
	import componentData from '$lib/data/components.json';
	import { Menu, X, Moon } from 'lucide-svelte';
	let { children } = $props();

	let isSidebarOpen = $state(false);

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}
</script>

<main>
	<div class="main-container flex w-full">
		<nav
			class={`sidebar fixed z-50 flex h-full flex-col gap-4 border-r-2 bg-white p-4 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
		>
			<div class="flex items-end gap-2">
				<div class="text-5xl">Components.</div>

				<button class="rounded-full border-2 p-2" onclick={toggleSidebar}>
					<X />
				</button>
			</div>

			<div class="component-list flex flex-col">
				{#each componentData as component}
					<div class="text-xl">{component.componentName}</div>
				{/each}
			</div>
		</nav>
		<div class="w-full">
			{@render children()}
		</div>
		<div class="absolute bottom-4 right-4 flex gap-2 p-2">
			<button class="border-2 p-2" onclick={toggleSidebar}>
				{#if isSidebarOpen}
					<X />
				{:else}
					<Menu />
				{/if}
			</button>
			<button class="border-2 p-2">
				<Moon />
			</button>
		</div>
	</div>
</main>
