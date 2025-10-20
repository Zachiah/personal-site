<script lang="ts">
	interface Props {
		colors: string;
		id: string;
		children?: import('svelte').Snippet;
	}

	let { colors, id, children }: Props = $props();
</script>

<section
	class="relative flex min-h-[100dvh] snap-start flex-col items-center justify-center overflow-hidden p-2 2xs:p-8 {colors}"
	{id}
>
	{@render children?.()}
</section>
