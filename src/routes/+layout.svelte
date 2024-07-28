<script lang="ts">
	import '../app.css';
	import componentData from '$lib/data/components.json';
	import { Menu, X, Sun, Moon } from 'lucide-svelte';
	import { ModeWatcher, toggleMode } from 'mode-watcher';

	let { children } = $props();
	let isSidebarOpen = $state(false);

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}
</script>

<main>
	<div class="main-container flex w-full">
		<nav
			class={`sidebar fixed z-50 flex h-full flex-col gap-4 border-r-2 bg-neutral-50 p-4 transition-transform duration-300 ease-in-out dark:bg-slate-900 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
		>
			<div class="flex items-end gap-8">
				<a href="/" class="text-5xl">Components.</a>

				<button class="rounded-full border-2 p-2" onclick={toggleSidebar}>
					<X />
				</button>
			</div>

			<div class="component-list flex flex-col">
				{#each componentData as component}
					<a href="/{component.routeApi}">
						<div class="text-xl">{component.componentName}</div>
					</a>
				{/each}
			</div>
		</nav>
		<div class="w-full">
			{@render children()}
		</div>
		<div class="absolute bottom-4 right-4 flex gap-2 p-2">
			<button class="border-2 bg-neutral-50 p-2 dark:bg-slate-900" onclick={toggleSidebar}>
				{#if isSidebarOpen}
					<X />
				{:else}
					<Menu />
				{/if}
			</button>
			<button class="border-2 bg-neutral-50 p-2 dark:bg-slate-900" onclick={toggleMode}>
				<Sun class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				<Moon class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			</button>
		</div>
	</div>
</main>
<ModeWatcher />
