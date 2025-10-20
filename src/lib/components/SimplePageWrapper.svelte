<script lang="ts">
	import Content from './Content.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="mx-auto max-w-max p-8">
	<main
		class="my-12 box-content max-w-prose rounded-lg bg-blue-100 p-8 shadow-lg shadow-sky-400 dark:bg-black dark:shadow-sky-500"
	>
		<Content>
			{@render children?.()}
		</Content>
	</main>
</div>
