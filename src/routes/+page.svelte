<script lang="ts">
	import FileInput from '$lib/components/FileInput/FileInput.svelte';
	import CustomScrollbar from '$lib/components/CustomScrollbar/CustomScrollbar.svelte';
	import InfiniteScroller from '$lib/components/InfiniteScroller/InfiniteScroller.svelte';
</script>

<main class="flex h-screen justify-center">
	<div class="flex h-full w-[80vw] flex-col gap-4 p-4">
		<div class="flex h-1/2 flex-grow items-center justify-center border-2">
			<CustomScrollbar />
		</div>
		<div class="flex h-1/2 flex-grow items-center justify-center border-2">Container 2</div>
	</div>
</main>
