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

{#each circles as circle (circle.id)}
	<div
		transition:fade
		class="pointer-events-none absolute z-50 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-contain mix-blend-difference shadow-inner {circle.color}"
		style="top: {circle.y}px; left: {circle.x}px;"
	/>
{/each}

{#if !isTouchDevice}
	<div
		class="pointer-events-none fixed z-50 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-contain shadow-inner {$page
			.url.pathname === '/'
			? 'bg-gray-200 dark:bg-blue-500 mix-blend-difference'
			: 'bg-blue-500 mix-blend-lighten dark:mix-blend-darken'}"
		style="top: {$mousePos.y}px; left: {$mousePos.x}px;"
	/>
{/if}

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

<style>
	@keyframes rotate-in {
		from {
			transform: translateX(120vw);
			opacity: 0;
		}
		33% {
			scale: 0.5;
			transform: translateX(120vw);
			opacity: 0;
		}
		66% {
			scale: 0.5;
			transform: translateX(0);
		}
	}

	@keyframes rotate-out {
		33% {
			scale: 0.5;
			transform: translateX(0);
			opacity: 1;
		}
		66% {
			scale: 0.5;
			transform: translateX(-120vw) rotate(360deg);
		}
		to {
			transform: translateX(-120vw) rotate(200deg);
			opacity: 0;
		}
	}

	:root::view-transition-old(root) {
		animation:
			2000ms cubic-bezier(0.4, 0, 0.2, 1) both rotate-out;
	}

	:root::view-transition-new(root) {
		animation:
			2000ms cubic-bezier(0.4, 0, 0.2, 1) both rotate-in;
	}
</style>
