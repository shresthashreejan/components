<script lang="ts">
	import type { ComponentInfo } from '$lib/types/types';
	import componentData from '$lib/data/components.json';
	import Base from '$lib/templates/Base.svelte';
	import FileInput from '$lib/components/FileInput/FileInput.svelte';
	let component: ComponentInfo;
	let route: string = 'fileinput';

	async function filterData() {
		const filteredData = componentData.find((item) => item.routeApi === route);
		if (filteredData) {
			component = filteredData;
		}
	}

	filterData();
</script>

{#if component}
	<Base {component}>
		<FileInput />
	</Base>
{/if}
