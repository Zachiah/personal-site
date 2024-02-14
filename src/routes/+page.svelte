<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import PageSection from './PageSection.svelte';
</script>

<SEO title="Zachiah Sawyer" description="Hi my name is Zachiah Sawyer. This is my personal site" />

<div class="relative">
	<div
		class="w-72 h-60 bg-opacity-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 absolute top-[calc(100vh_-_2rem)] left-0"
	/>
</div>

<PageSection colors="bg-gradient-to-br from-blue-400" id="top">
	<h1 class="text-center text-6xl font-mono" style="view-transition-name: fullname;">
		Zachiah Sawyer
	</h1>
	<img
		width="400"
		height="400"
		src="/pfp.webp"
		class="absolute top-0 left-0 max-w-full w-32 h-32 duration-200"
		alt="Zachiah Sawyer"
	/>
</PageSection>

<PageSection colors="bg-gradient-to-tr from-blue-500" id="links">
	<div class="prose mx-auto text-center">
		<ul
			class="text-gray-800 dark:text-gray-200 text-2xl sm:text-4xl flex flex-col gap-8 p-4 font-mono"
		>
			{#each [{ url: '/skills/developer', text: 'Software Engineer' }, { url: '/skills/pianist', text: 'Pianist' }, { url: '/skills/bjj', text: 'Jiujitsu Practitioner' }, { url: 'https://chess.com/member/zachiah1', text: 'Chess Player' }, { url: '/skills/trampoliner', text: 'Trampoliner' }] as item}
				<li>
					<a
						href={item.url}
						target={item.url.startsWith('/') ? undefined : '_blank'}
						class="block rounded-lg hover:underline active:bg-blue-600 bg-gradient-to-br from-blue-950 to-blue-800 bg-blue-950 p-4 hover:scale-110 transform scale-100 duration-200"
					>
						{item.text}
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div
		class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] max-w-[50vw] aspect-square rounded-full bg-blue-500 bg-opacity-50"
	/>
</PageSection>
