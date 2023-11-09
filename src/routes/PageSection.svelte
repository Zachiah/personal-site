<script lang="ts">
	import ScrollButton from './ScrollButton.svelte';

	export let colors: string;
	export let num: number;
</script>

<section
	class="overflow-hidden p-8 relative snap-start h-[100dvh] flex flex-col justify-center items-center {colors}"
	id={`section${num}`}
>
	{#if num !== 1}
		<ScrollButton btn="up" />
	{/if}
	<slot />
	{#if num !== 3}
		<ScrollButton btn="down" />
	{/if}
</section>
