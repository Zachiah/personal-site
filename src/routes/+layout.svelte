<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import '../app.postcss';

	onNavigate((navigation) => {
		const d = document as any as { startViewTransition: (fn: () => Promise<void>) => void };
		if (!d.startViewTransition) return;

		return new Promise((resolve) => {
			d.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

{#if $page.url.pathname !== '/'}
	<nav class="w-full text-right px-4 py-3 font-mono max-w-[100vw]">
		<a href="/" style="view-transition-name: fullname;">Zachiah Sawyer</a>
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
			transform: scale(0) translate(-40px,-40px);
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
