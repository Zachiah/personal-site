<script lang="ts">
	export let text: string;
	export let url: string;

	export let colors: string;
</script>

<a
	href={url}
	target={url.startsWith('/') ? undefined : '_blank'}
	class="flex h-72 flex-1 scale-100 transform items-center justify-center rounded-lg bg-gradient-to-br p-20 text-center shadow-lg duration-200 hover:scale-110 hover:underline active:bg-blue-600 {colors}"
>
	{text}
</a>
