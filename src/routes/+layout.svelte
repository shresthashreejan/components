<script>
	import '../app.css';
	let { children } = $props();
</script>

<nav>
	<h1 class="p-4 text-3xl font-bold md:text-5xl">Components.</h1>
</nav>
{@render children()}
