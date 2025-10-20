<script lang="ts">
	interface Props {
		btn: 'up' | 'down';
	}

	let { btn }: Props = $props();
</script>

<button
	class="absolute left-1/2 z-20 flex h-24 w-24 -translate-x-1/2 transform content-center items-center rounded-full bg-blue-500 bg-opacity-50 {btn ===
	'down'
		? 'bottom-12 md:bottom-24'
		: 'top-12 md:top-24'} "
	onclick={() => {
		const sectionNumber = Math.ceil((window.scrollY + window.innerHeight / 2) / window.innerHeight);
		const newSectionNumber = btn === 'up' ? sectionNumber - 1 : sectionNumber + 1;
		location.hash = 'blah';
		location.hash = `#section${newSectionNumber}`;
	}}
	aria-label="Scroll to {btn === 'up' ? 'previous' : 'next'} section"
>
	<div
		class="absolute left-1/2 mx-auto w-2 -translate-x-1/2 transform bg-blue-500 {btn === 'up'
			? 'rounded-b-full'
			: 'rounded-t-full'} h-10"
	></div>

	<div
		class="left-1/2 -translate-x-1/2 transform {btn === 'down'
			? 'top-16 border-t-blue-500'
			: 'bottom-16 border-b-blue-500'} absolute mx-auto box-content h-0 w-0 border-[12px] border-transparent"
	></div>
</button>
