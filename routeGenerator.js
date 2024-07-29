import fs from 'fs';
import path from 'path';
import componentData from './src/lib/data/components.json' assert { type: 'json' };

const routesDir = path.join(process.cwd(), 'src', 'routes');

componentData.forEach((component) => {
	const routeFolderName = component.routeApi;
	const routeFolderPath = path.join(routesDir, routeFolderName);

	if (!fs.existsSync(routeFolderPath)) {
		fs.mkdirSync(routeFolderPath, { recursive: true });
		const content = `
<script lang="ts">
    import type { ComponentInfo } from '$lib/types/types';
    import componentData from '$lib/data/components.json';
    import Base from '$lib/templates/Base.svelte';
    import ${component.componentName.replace(/ /g, '')} from '$lib/components/${component.componentName.replace(/ /g, '')}/${component.componentName.replace(/ /g, '')}.svelte';

    let component: ComponentInfo;
    let route: string = '${component.routeApi}';

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
        <${component.componentName.replace(/ /g, '')} />
    </Base>
{/if}`;

		const filePath = path.join(routeFolderPath, '+page.svelte');
		fs.writeFileSync(filePath, content, 'utf8');
		console.log(`Created ${filePath}`);
	} else {
		console.log(`${routeFolderPath} already exists.`);
	}
});
