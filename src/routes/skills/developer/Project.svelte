<script lang="ts">
	interface Props {
		href: string;
		children?: import('svelte').Snippet;
	}

	let { href, children }: Props = $props();
</script>

<a
	class="flex flex-1 items-center justify-center rounded-md bg-white p-4 text-center duration-200 hover:scale-110 dark:bg-black"
	{href}
	target="_blank"
	rel="noopener"
>
	{@render children?.()}
</a>
