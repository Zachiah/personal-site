<script lang="ts">
	export let btn: 'up' | 'down';
</script>

<button
	class="absolute z-20 w-24 h-24 flex items-center content-center rounded-full bg-blue-500 bg-opacity-50 transform -translate-x-1/2 left-1/2 {btn ===
	'down'
		? 'bottom-12 md:bottom-24'
		: 'top-12 md:top-24'} "
	on:click={() => {
		const sectionNumber = Math.ceil((window.scrollY + window.innerHeight / 2) / window.innerHeight);
		const newSectionNumber = btn === 'up' ? sectionNumber - 1 : sectionNumber + 1;
		location.hash = 'blah';
		location.hash = `#section${newSectionNumber}`;
	}}
	aria-label="Scroll to {btn === 'up' ? 'previous' : 'next'} section"
>
	<div
		class="left-1/2 transform -translate-x-1/2 bg-blue-500 absolute mx-auto w-2 {btn === 'up'
			? 'rounded-b-full'
			: 'rounded-t-full'} h-10"
	/>

	<div
		class="left-1/2 transform -translate-x-1/2 {btn === 'down'
			? 'top-16 border-t-blue-500'
			: 'bottom-16 border-b-blue-500'} absolute mx-auto w-0 h-0 box-content border-[12px] border-transparent"
	/>
</button>
