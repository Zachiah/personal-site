<div class="contents">
	<slot />
</div>

<style lang="postcss">
	div :global(h1) {
		@apply text-4xl text-center mb-2;
	}

	div :global(h2) {
		@apply text-2xl mt-6;
	}

	div :global(ul) {
		@apply list-disc list-inside;
	}

	div :global(hr) {
		@apply border-b border-black dark:border-white mb-4;
	}

	div :global(a) {
		@apply underline hover:text-blue-800 dark:hover:text-blue-200;
	}

	div :global(p) {
		@apply my-4
	}

	div :global(.spaced li) {
		@apply mb-4
	}
</style>
