<script lang="ts">
	import type { ComponentInfo } from '$lib/types/types';
	import { ArrowLeft, Code, Expand, Minimize2 } from 'lucide-svelte';
	let { component, children }: { component: ComponentInfo; children: any } = $props();
</script>

<main class="flex h-screen justify-center">
	<div class="flex h-full w-full flex-col gap-4 p-4">
		<div class="flex h-2/3 flex-grow items-center justify-center border-2">
			{@render children()}
		</div>
		<div class="flex h-1/3 flex-grow flex-col border-2 p-4">
			<div class="flex justify-between">
				<h1 class="text-7xl">{component.componentName}</h1>
				<div class="flex gap-4 p-4">
					<button class="border-2 p-2">
						<ArrowLeft />
					</button>
					<button class="border-2 p-2">
						<Code />
					</button>
					<button class="border-2 p-2">
						<Expand />
					</button>
				</div>
			</div>
			<p class="text-2xl">{component.description}</p>
		</div>
	</div>
	<button class="absolute right-4 top-4 border-2 bg-white p-2"><Minimize2 /></button>
</main>
