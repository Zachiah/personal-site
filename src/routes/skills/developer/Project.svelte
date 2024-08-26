<script lang="ts">
	export let href: string;
</script>

<a
	class="flex flex-1 items-center justify-center rounded-md bg-white p-4 text-center duration-200 hover:scale-110 dark:bg-black"
	{href}
	target="_blank"
	rel="noopener"
>
	<slot />
</a>
