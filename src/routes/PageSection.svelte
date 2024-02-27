<script lang="ts">
	export let colors: string;
	export let id: string;
</script>

<section
	class="relative flex min-h-[100dvh] snap-start flex-col items-center justify-center overflow-hidden p-8 {colors}"
	{id}
>
	<slot />
</section>
