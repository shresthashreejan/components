
<script lang="ts">
    import type { ComponentInfo } from '$lib/types/types';
    import componentData from '$lib/data/components.json';
    import Base from '$lib/templates/Base.svelte';
    import InfiniteScroller from '$lib/components/InfiniteScroller/InfiniteScroller.svelte';

    let component: ComponentInfo;
    let route: string = 'infinitescroller';

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
        <InfiniteScroller />
    </Base>
{/if}