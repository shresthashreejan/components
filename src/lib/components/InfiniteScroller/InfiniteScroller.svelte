<script lang="ts">
	import './InfiniteScroller.css';

	const items = [
		'HTML',
		'CSS',
		'JavaScript',
		'Web Development',
		'TypeScript',
		'React',
		'Next',
		'Svelte',
		'SvelteKit',
		'Full Stack Development'
	];

	$effect(() => {
		const scrollers = document.querySelectorAll<HTMLElement>('.scroller');
		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			addAnimation(scrollers);
		}
	});

	function addAnimation(scrollers: NodeListOf<HTMLElement>): void {
		scrollers.forEach((scroller) => {
			scroller.setAttribute('data-animated', 'true');

			const scrollerInner = scroller.querySelector<HTMLElement>('.scroller-inner');
			if (scrollerInner) {
				const scrollerContent = Array.from(scrollerInner.children);
				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true) as HTMLElement;
					duplicatedItem.setAttribute('aria-hidden', 'true');
					scrollerInner.appendChild(duplicatedItem);
				});
			}
		});
	}
</script>

<main>
	<div class="scroller max-w-full py-4" data-speed="fast" data-direction="right">
		<ul class="scroller-inner flex flex-wrap gap-12">
			{#each items as item (item)}
				<li class="text-4xl">{item}</li>
			{/each}
		</ul>
	</div>
</main>
