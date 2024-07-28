<script lang="ts">
	import type { ComponentInfo } from '$lib/types/types';
	import { ArrowLeft, Code, Expand, Minimize2 } from 'lucide-svelte';
	let { component, children }: { component: ComponentInfo; children: any } = $props();

	let isExpanded: boolean = $state(false);

	function toggleExpand() {
		isExpanded = !isExpanded;
	}

	function goBack() {
		window.history.back();
	}
</script>

<main class="flex h-screen justify-center">
	<div class="flex h-full w-full flex-col gap-4 p-4">
		<div class="flex h-2/3 flex-grow items-center justify-center border-2">
			{@render children()}
		</div>
		{#if !isExpanded}
			<div class="flex h-1/3 flex-grow flex-col border-2 p-4">
				<div class="flex justify-between">
					<h1 class="text-7xl">{component.componentName}</h1>
					<div class="flex gap-4 p-4">
						<button class="border-2 bg-neutral-50 p-2 dark:bg-slate-900" onclick={goBack}>
							<ArrowLeft />
						</button>
						<a
							class="border-2 bg-neutral-50 p-2 dark:bg-slate-900"
							href={component.url}
							target="_blank"
						>
							<Code />
						</a>
						<button class="border-2 bg-neutral-50 p-2 dark:bg-slate-900" onclick={toggleExpand}>
							<Expand />
						</button>
					</div>
				</div>
				<p class="text-2xl">{component.description}</p>
			</div>
		{/if}
	</div>
	{#if isExpanded}
		<button
			class="absolute right-4 top-4 border-2 bg-neutral-50 p-2 dark:bg-slate-900"
			onclick={toggleExpand}
		>
			<Minimize2 />
		</button>
	{/if}
</main>
