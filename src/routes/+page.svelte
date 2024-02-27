<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import PageSection from './PageSection.svelte';
	import Skill from './Skill.svelte';
</script>

<SEO title="Zachiah Sawyer" description="Hi my name is Zachiah Sawyer. This is my personal site" />

<PageSection colors="bg-gradient-to-br from-orange-500 to-blue-500" id="top">
	<div class="prose mx-auto text-center">
		<div
			class="flex flex-wrap gap-16 p-4 font-mono text-2xl text-gray-800 dark:text-gray-200 sm:text-4xl"
		>
			<h1
				class="flex items-center justify-center whitespace-normal rounded-lg bg-blue-950 bg-gradient-to-br from-blue-950 to-orange-500 p-20 text-center font-mono text-6xl shadow-lg"
			>
				Zachiah Sawyer
			</h1>
			<div class="bg-blue-500 bg-gradient-to-br from-blue-500 to-orange-800 rounded-lg">
				<img
					class="h-72 w-auto rounded-lg shadow-lg opacity-60 hover:opacity-100 duration-200"
					width="400"
					height="400"
					src="/pfp.webp"
					alt="Zachiah Sawyer"
				/>
			</div>
			<Skill
				url="/skills/developer"
				text="Software Engineer"
				colors="bg-blue-950 from-blue-950 to-orange-800"
			/>
			<Skill
				url="/skills/pianist"
				text="Pianist"
				colors="bg-blue-500 from-blue-500 to-orange-800"
			/>
			<Skill
				url="/skills/bjj"
				text="Jiujitsu Practitioner"
				colors="bg-blue-500 from-blue-500 to-orange-500 text-black"
			/>
			<Skill
				url="https://chess.com/member/zachiah1"
				text="Chess Player"
				colors="bg-blue-950 from-blue-950 to-orange-500"
			/>
			<Skill
				url="/skills/trampoliner"
				text="Trampoliner"
				colors="bg-blue-950 from-blue-950 to-orange-800"
			/>
		</div>
	</div>
</PageSection>
