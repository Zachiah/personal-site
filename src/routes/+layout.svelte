<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import '../app.postcss';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';
	import throttle from 'lodash.throttle';
	import { fade } from 'svelte/transition';

	onNavigate((navigation) => {
		circles = [];

		const d = document as any as { startViewTransition: (fn: () => Promise<void>) => void };
		if (!d.startViewTransition) return;

		return new Promise((resolve) => {
			d.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let canvas: HTMLCanvasElement = null;
	let ctx: CanvasRenderingContext2d;

	let mounted = false;
	onMount(() => {
		ctx = canvas.getContext('2d');
		mounted = true;

		console.log(canvas);
	});

	let mousePos = spring({ x: -80, y: -80 }, { stiffness: 0.1, damping: 0.2 });
	$: isTouchDevice = mounted && window.matchMedia('(pointer: coarse)').matches;

	let id = 0;
	let circles: { color: string; id: number; x: number; y: number }[] = [];
	const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'];

	let windowWidth = 1600;
	let windowHeight = 900;

	let hue = Math.floor(Math.random() * 256);
</script>

<svelte:window
	bind:innerWidth={windowWidth}
	bind:innerHeight={windowHeight}
	on:mousemove={throttle((e) => {
		$mousePos = { x: e.x, y: e.y };

	    hue = (hue + 1) % 256;

	    ctx.fillStyle = `hsla(${hue}, 50%, 50%, 0.2)`;

		const squareSize = 30;

		const quantizedX = e.x - e.x % squareSize;
		const quantizedY = e.y - e.y % squareSize;


	    ctx.fillRect(quantizedX, quantizedY, squareSize, squareSize);

		setTimeout(() => {
			ctx.clearRect(quantizedX, quantizedY, squareSize, squareSize);
		}, 500);
	})}
/>

<svelte:body
	on:mousedown={(e) => {
		if ($page.url.pathname === '') {
			const newId = id++;
			circles.push({
				color: colors[id % colors.length],
				id: newId,
				x: e.x,
				y: e.y + window.scrollY
			});
			circles = circles;

			setTimeout(() => {
				circles = circles.filter((c) => c.id !== newId);
			}, 1000);
		}
	}}
/>


{#if $page.url.pathname !== '/'}
	<nav class="absolute right-0 top-0 flex font-mono text-blue-800">
		<a
			href="/#links"
			style="view-transition-name: fullname;"
			class="ml-auto flex scale-100 transform gap-2 rounded-bl-lg bg-blue-200 p-4 shadow-lg shadow-blue-800 duration-200 hover:bg-blue-800 hover:text-gray-200 focus:bg-blue-800 focus:text-gray-200 active:scale-110"
		>
			<span> Zachiah&nbsp;Sawyer </span>

			<div class="w-6 h-full icon-[heroicons--arrow-right-end-on-rectangle]" />
		</a>
	</nav>
{/if}

<slot />


<canvas width={windowWidth} height={windowHeight} bind:this={canvas} class="fixed top-0 left-0 right-0 bottom-0 z-40 w-screen h-screen pointer-events-none"></canvas>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes scale-in {
		from {
			transform: scale(0) translate(-40px, -40px);
			filter: grayscale(1);
		}
	}

	@keyframes scale-out {
		to {
			transform: scale(0) translate(-40px, -40px);
			filter: grayscale(1);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both scale-out;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both scale-in;
	}
</style>
