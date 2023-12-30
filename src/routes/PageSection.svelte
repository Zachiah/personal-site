<script lang="ts">
	export let colors: string;
	export let num: number;
	export let id: string;
</script>

<section
	class="overflow-hidden p-8 relative snap-start h-[100dvh] flex flex-col justify-center items-center {colors}"
	id={id}
>
	<slot />
</section>
