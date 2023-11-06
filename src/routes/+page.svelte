<script lang="ts">
	import { onMount } from 'svelte';

	let scrollY = 0;

	const interpolate = (a: number, b: number, p: number) => {
		const diff = b - a;

		return a + p * diff;
	};

	$: windowHeight = typeof window === 'undefined' ? 0 : window.innerHeight;
	$: percentage = Math.min(scrollY / windowHeight, 1);

	$: nameStyles = `
        top: ${interpolate(50, 0, percentage)}%;
        transform: translate(
            -${interpolate(50, 100, percentage)}%,
            -${interpolate(50, 0, percentage)}%
        );
        left: ${interpolate(50, 100, percentage)}%;
        font-size: ${interpolate(64, 16, percentage)}px;
    `;

	let mounted = false;
	onMount(() => (mounted = true));

	let scrollDiv: HTMLElement;
</script>

<div class="prose text-8xl mx-auto text-center z-50" class:fixed={mounted} style={nameStyles}>
	<h1 class="p-4 font-mono w-max max-w-[100vw]">Zachiah Sawyer</h1>
</div>

<div
	bind:this={scrollDiv}
	on:scroll={(ev) => {
		scrollY = ev.currentTarget.scrollTop;
	}}
	class="h-screen overflow-auto snap-mandatory snap-y"
>
	<section
		class="relative bg-gradient-to-br from-blue-400 snap-center h-screen flex flex-col justify-center content-center"
	>
		<button
			class="absolute w-24 h-24 flex items-center content-center rounded-full bg-blue-500 bg-opacity-50 bottom-24 transform -translate-x-1/2 left-1/2 scale-[var(--scale)]"
			style="--scale: {interpolate(1, 0, percentage)}"
			on:click={() => {
				scrollDiv.scroll({ top: 1000, left: 0, behavior: 'smooth' });
			}}
		>
			<div
				class="left-1/2 transform -translate-x-1/2 bg-blue-500 absolute mx-auto w-2 rounded-t-full h-10"
			/>
			<div
				class="left-1/2 transform -translate-x-1/2 top-16 absolute mx-auto w-0 h-0 box-content border-[12px] border-transparent border-t-blue-500"
			/>
		</button>

		<div
			class="w-72 h-60 bg-opacity-50 rounded-full transform -translate-x-1/2 translate-y-1/2 bg-blue-500 absolute bottom-10 left-0"
		/>
	</section>

	<section
		class="bg-gradient-to-tr from-blue-500 relative snap-center h-screen flex flex-col justify-center content-center"
	>
		<div class="prose mx-auto text-center">
			<ul
				class="text-gray-600 dark:text-gray-200 text-2xl sm:text-4xl flex flex-col gap-2 p-4 font-mono"
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
			class="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-opacity-50 bg-blue-500 bg-opacity-50 translate scale-[var(--scale)]"
			style="--scale: {interpolate(0, 1, percentage)}"
		/>
	</section>
</div>
