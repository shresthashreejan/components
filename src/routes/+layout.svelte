<script>
	import '../app.css';
	import { Button } from '$lib/components/ui/button/index';

	let { children } = $props();
</script>

<nav class="flex items-center justify-between p-4">
	<a href="/">
		<h1 class="text-3xl font-bold md:text-5xl">Components.</h1>
	</a>
	<a href="/playground">
		<Button>Playground</Button>
	</a>
</nav>

{@render children()}
