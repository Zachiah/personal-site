<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import PageSection from './PageSection.svelte';
	import Skill from './Skill.svelte';
</script>

<SEO title="Zachiah Sawyer" description="Hi my name is Zachiah Sawyer. This is my personal site" />

<PageSection colors="bg-gradient-to-br from-orange-500 to-blue-500" id="top">
	<div class="prose mx-auto text-center">
		<div
			class="flex flex-col flex-wrap gap-2 font-mono text-2xl text-gray-800 dark:text-gray-200 2xs:gap-16 2xs:p-4 sm:flex-row sm:text-4xl"
		>
			<h1
				class="flex h-72 flex-1 items-center justify-center whitespace-normal rounded-lg bg-blue-950 bg-gradient-to-br from-blue-950 to-orange-500 px-2 py-10 text-center font-mono text-2xl shadow-lg 2xs:text-4xl xs:p-20 sm:text-6xl"
			>
				Zachiah Sawyer
			</h1>
			<div class="rounded-lg bg-blue-500 bg-gradient-to-br from-blue-500 to-orange-800">
				<img
					class="h-72 w-auto rounded-lg object-contain opacity-60 shadow-lg duration-200 hover:opacity-100"
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
			<Skill
				url="/skills/origamist"
				text="Origamist"
				colors="bg-blue-950 from-blue-950 to-orange-500"
			/>
		</div>
	</div>
</PageSection>
