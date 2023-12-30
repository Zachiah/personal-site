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

	let mounted = false;
	onMount(() => (mounted = true));

	let mousePos = spring({ x: -80, y: -80 }, { stiffness: 0.1, damping: 0.2 });
	$: isTouchDevice = mounted && window.matchMedia('(pointer: coarse)').matches;

	let id = 0;
	let circles: { color: string; id: number; x: number; y: number }[] = [];
	const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'];
</script>

<svelte:window
	on:mousemove={throttle((e) => {
		$mousePos = { x: e.x, y: e.y };
	})}
/>

<svelte:body
	on:mousedown={(e) => {
		const newId = id++;
		circles.push({ color: colors[id % colors.length], id: newId, x: e.x, y: e.y + window.scrollY });
		circles = circles;

		setTimeout(() => {
			circles = circles.filter((c) => c.id !== newId);
		}, 1000);
	}}
/>

{#each circles as circle (circle.id)}
	<div
		transition:fade
		class="absolute w-40 h-40 rounded-full shadow-inner mix-blend-difference z-50 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-contain {circle.color}"
		style="top: {circle.y}px; left: {circle.x}px;"
	/>
{/each}

{#if !isTouchDevice}
	<div
		class="fixed w-40 h-40 rounded-full shadow-inner bg-gray-200 dark:bg-blue-500 mix-blend-difference z-50 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-contain"
		style="top: {$mousePos.y}px; left: {$mousePos.x}px;"
	/>
{/if}

{#if $page.url.pathname !== '/'}
	<nav class="w-full flex p-8 font-mono text-blue-800 max-w-[100vw]">
		<a
			href="/#links"
			style="view-transition-name: fullname;"
			class="rounded-lg shadow-lg shadow-blue-800 ml-auto bg-blue-200 p-4 hover:bg-blue-800 hover:text-gray-200 focus:bg-blue-800 focus:text-gray-200 duration-200 transform scale-100 active:scale-110"
			>Zachiah Sawyer</a
		>
	</nav>
{/if}

<slot />

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
		animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both scale-out;
	}

	:root::view-transition-new(root) {
		animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both scale-in;
	}
</style>
