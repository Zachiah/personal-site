<script lang="ts">
	import { onMount } from 'svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { spring, tweened } from 'svelte/motion';
    import throttle from 'lodash.throttle';

	let scrollY = typeof window === 'undefined' ? 0 : window.scrollY;

	const interpolate = (a: number, b: number, p: number) => {
		const diff = b - a;

		return a + p * diff;
	};

	// TODO: make it listen for window resizes and update this
	$: windowHeight = typeof window === 'undefined' ? 1000 : window.innerHeight;
	$: _percentage = Math.min(scrollY / windowHeight, 1);
	const percentage = spring(isNaN(_percentage) ? 0 : _percentage);
	$: $percentage = isNaN(_percentage) ? 0 : _percentage;

	$: nameStyles = `
        top: ${interpolate(50, 0, $percentage)}%;
        transform: translate(
            -${interpolate(50, 100, $percentage)}%,
            -${interpolate(50, 0, $percentage)}%
        );
        left: ${interpolate(50, 100, $percentage)}%;
        font-size: ${interpolate(64, 16, $percentage)}px;
    `;

	let mounted = false;
	onMount(() => (mounted = true));

	let mousePos = spring({ x: -80, y: -80 }, { stiffness: 0.1, damping: 0.2 });
	$: isTouchDevice = mounted && window.matchMedia('(pointer: coarse)').matches;
</script>

<SEO title="Zachiah Sawyer" description="Hi my name is Zachiah Sawyer. This is my personal site" />

<svelte:window
	on:scroll={throttle(() => {
		scrollY = window.scrollY;
	}, 50)}
	on:mousemove={throttle((e) => {
		$mousePos = { x: e.x, y: e.y };
	}, 50)}
/>

{#if !isTouchDevice}
	<div
		class="fixed w-52 h-52 rounded-full shadow-inner bg-gray-200 dark:bg-blue-500 mix-blend-difference z-50 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
		style="top: {$mousePos.y}px; left: {$mousePos.x}px;"
	/>
{/if}

<div
	class="prose mx-auto text-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[64px]"
	class:fixed={mounted}
	class:absolute={!mounted}
	style={nameStyles}
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

<section
	class="overflow-hidden relative bg-gradient-to-br from-blue-400 snap-center h-screen flex flex-col justify-center content-center"
>
	<button
		class="absolute w-24 h-24 flex items-center content-center rounded-full bg-blue-500 bg-opacity-50 bottom-24 transform -translate-x-1/2 left-1/2 scale-[var(--scale)]"
		style="--scale: {interpolate(1, 0, $percentage)}"
		on:click={() => {
			window.scroll({ top: windowHeight, left: 0, behavior: 'smooth' });
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
</section>

<section
	class="bg-gradient-to-tr overflow-hidden from-blue-500 relative snap-center h-screen flex flex-col justify-center content-center"
>
	<div class="prose mx-auto text-center">
		<ul
			class="text-gray-800 dark:text-gray-200 text-2xl sm:text-4xl flex flex-col gap-2 p-4 font-mono"
		>
			<li>
				<a href="/skills/developer" class="hover:underline"> Fullstack Developer </a>
			</li>
			<li>
				<a href="/skills/pianist" class="hover:underline"> Pianist </a>
			</li>
			<li>
				<a href="/skills/bjj" class="hover:underline"> Jiujitsu Practitioner </a>
			</li>
			<li>
				<a href="https://chess.com/member/zachiah1" target="_blank" class="hover:underline">
					Chess Player
				</a>
			</li>
		</ul>
	</div>

	<div
		class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] max-w-[50vw] aspect-square rounded-full bg-blue-500 bg-opacity-50 translate scale-[var(--scale)]"
		style="--scale: {interpolate(5, 1, $percentage)}"
	/>
</section>
