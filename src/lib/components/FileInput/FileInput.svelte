<script lang="ts">
	let dropZone: HTMLElement;

	$effect(() => {
		['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
			dropZone.addEventListener(
				eventName,
				(e: Event) => {
					e.preventDefault();
					e.stopPropagation();
					if (eventName === 'dragenter' || eventName === 'dragover') {
						dropZone.classList.add('opacity-50');
					} else {
						dropZone.classList.remove('opacity-50');
					}
				},
				false
			);
		});

		dropZone.addEventListener(
			'drop',
			(e: DragEvent) => {
				e.preventDefault();
				e.stopPropagation();
				let dt = e.dataTransfer;
				if (dt) {
					let files = dt.files;
					if (files) {
						console.log(files);
					}
				}
			},
			false
		);
	});
</script>

<main class="h-full w-full p-4">
	<div
		bind:this={dropZone}
		class="dropzone cursor h-full w-full rounded-xl border-2 transition-opacity"
	>
		<div class="flex h-full items-center justify-center">Drop your image here...</div>
	</div>
</main>
