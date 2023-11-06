<script lang="ts">
	import { page } from '$app/stores';
	import '../app.postcss';
</script>

{#if $page.url.pathname !== '/'}
	<nav class="w-full text-right px-4 py-3 font-mono max-w-[100vw]">
		<a href="/">Zachiah Sawyer</a>
	</nav>
{/if}

<slot />
