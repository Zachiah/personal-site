<div class="contents">
	<slot />
</div>

<style lang="postcss">
	div :global(h1) {
		@apply mb-2 text-center text-4xl;
	}
	div :global(h1:not(:first-child)) {
		@apply mt-6;
	}

	div :global(h2:not(:first-child)) {
		@apply mt-6;
	}
	div :global(h2) {
		@apply text-2xl;
	}

	div :global(ul) {
		@apply list-inside list-disc;
	}

	div :global(hr) {
		@apply mb-4 border-b border-black dark:border-white;
	}

	div :global(a) {
		@apply underline hover:text-blue-800 dark:hover:text-blue-200;
	}

	div :global(p) {
		@apply my-4 text-justify;
	}

	div :global(.spaced li) {
		@apply mb-4;
	}

	div :global(img) {
		@apply rounded-md;
	}

	div :global(li::marker) {
		content: "• "
	}

	div :global(figure) {
		@apply mt-8 flex flex-col gap-4 rounded-md bg-gray-200 p-4 shadow-sm dark:bg-slate-900 dark:shadow-white;
	}
</style>
