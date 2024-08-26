<script lang="ts">
	export let href: string;
</script>

<a class="text-center flex items-center justify-center flex-1 rounded-md bg-white p-4 dark:bg-black duration-200 hover:scale-110" href={href} target="_blank" rel="noopener">
    <slot />
</a>
