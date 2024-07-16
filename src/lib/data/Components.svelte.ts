import type { ComponentInfo } from '$lib/types/types';

export async function fetchComponentData(): Promise<ComponentInfo[]> {
	const response = await fetch('src/lib/data/components.json');
	const data = await response.json();
	return data;
}
