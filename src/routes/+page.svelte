<script lang="ts">
	import { onMount } from 'svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { spring } from 'svelte/motion';
	import throttle from 'lodash.throttle';
	import { faceSelected } from '$lib/faceSelected';

	let scrollY = typeof window === 'undefined' ? 0 : window.scrollY;

	const interpolate = (a: number, b: number, p: number) => {
		const diff = b - a;

		return a + p * diff;
	};

	let windowHeight = typeof window === 'undefined' ? 1000 : window.innerHeight;
	$: _percentage = scrollY / windowHeight;
	const percentage = spring(isNaN(_percentage) ? 0 : _percentage);
	$: $percentage = isNaN(_percentage) ? 0 : _percentage;

	let mounted = false;
	onMount(() => {
		mounted = true;
		let observer = new ResizeObserver(() => {
			windowHeight = window.innerHeight;
		});

		observer.observe(document.documentElement);

		return () => observer.disconnect();
	});
</script>

<SEO title="Zachiah Sawyer" description="Hi my name is Zachiah Sawyer. This is my personal site" />

<svelte:window
	on:scroll={throttle(() => {
		scrollY = window.scrollY;
	}, 50)}
/>

<div
	class="absolute prose mx-auto text-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[64px]"
>
	<h1 class="p-4 font-mono w-max max-w-[100vw]" style="view-transition-name: fullname;">
		Zachiah Sawyer
	</h1>
</div>

<div class="relative">
	<div
		class="w-72 h-60 bg-opacity-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 absolute top-[calc(100vh_-_2rem)] left-0"
	/>
</div>

<button
	class="fixed z-20 w-24 h-24 flex items-center content-center rounded-full bg-blue-500 bg-opacity-50 bottom-24 transform -translate-x-1/2 left-1/2 scale-[var(--scale)]"
	style="--scale: {$percentage >= 1.5 ? 0 : interpolate(1, 0, $percentage % 1)}"
	on:click={() => {
		console.log('Scrolling');
		window.scrollTo({ top: Math.max(window.scrollY, 0) + windowHeight * 1.5, left: 0, behavior: 'smooth' });
	}}
	aria-label="Scroll to next section"
>
	<div
		class="left-1/2 transform -translate-x-1/2 bg-blue-500 absolute mx-auto w-2 rounded-t-full h-10"
	/>
	<div
		class="left-1/2 transform -translate-x-1/2 top-16 absolute mx-auto w-0 h-0 box-content border-[12px] border-transparent border-t-blue-500"
	/>
</button>

<section
	class="overflow-hidden relative bg-gradient-to-br from-blue-400 snap-start h-[100dvh] flex flex-col justify-center content-center"
/>

<section
	class="bg-gradient-to-tr overflow-hidden from-blue-500 relative snap-start h-[100dvh] flex flex-col justify-center content-center"
>
	<div class="prose mx-auto text-center">
		<ul
			class="text-gray-800 dark:text-gray-200 text-2xl sm:text-4xl flex flex-col gap-8 p-4 font-mono"
		>
			{#each [{ url: '/skills/developer', text: 'Fullstack Developer' }, { url: '/skills/pianist', text: 'Pianist' }, { url: '/skills/bjj', text: 'Jiujitsu Practitioner' }, { url: 'https://chess.com/member/zachiah1', text: 'Chess Player' }] as item}
				<li>
					<a
						href={item.url}
						target={item.url.startsWith('/') ? undefined : '_blank'}
						class="block rounded-lg hover:underline active:bg-blue-600 bg-blue-800 p-4 hover:scale-110 transform scale-100 duration-200"
					>
						{item.text}
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div
		class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] max-w-[50vw] aspect-square rounded-full bg-blue-500 bg-opacity-50 translate scale-[var(--scale)]"
		style="--scale: {interpolate(5, 1, $percentage)}"
	/>
</section>

<section
	class="bg-gradient-to-tr overflow-hidden from-blue-500 relative snap-start h-[100dvh] flex flex-col justify-center items-center p-8"
>
	<button
		class="group relative rounded-full bg-blue-500 bg-opacity-50"
		on:click={() => ($faceSelected = !$faceSelected)}
	>
		<p
			class="z-20 opacity-0 group-hover:opacity-100 bg-blue-500 bg-opacity-50 p-4 rounded-lg duration-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
		>
			{#if $faceSelected}
				Put me back!
			{:else}
				Don't click me
			{/if}
		</p>
		<img
			width="400"
			height="400"
			src="/pfp.webp"
			class="max-w-full rounded-full duration-200"
			class:opacity-0={$faceSelected}
			alt="Zachiah Sawyer"
		/>
	</button>
</section>
