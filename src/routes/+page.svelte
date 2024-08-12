<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import PageSection from './PageSection.svelte';
	import Skill from './Skill.svelte';
</script>

<SEO title="Zachiah Sawyer" description="Hi my name is Zachiah Sawyer. This is my personal site" />

<PageSection colors="bg-gradient-to-br from-green-500 to-sky-500" id="top">
	<div class="prose mx-auto text-center text-white">
		<div
			class="flex flex-col flex-wrap gap-2 font-mono text-2xl text-gray-800 dark:text-gray-200 2xs:gap-16 2xs:p-4 sm:flex-row sm:text-4xl"
		>
			<h1
				class="flex h-72 flex-1 items-center justify-center whitespace-normal rounded-lg bg-sky-950 bg-gradient-to-br from-sky-950 to-green-500 px-2 py-10 text-center font-mono text-2xl shadow-lg 2xs:text-4xl xs:p-20 sm:text-6xl text-white"
			>
				Zachiah Sawyer
			</h1>
			<div class="rounded-lg bg-sky-500 bg-gradient-to-br from-sky-500 to-green-800">
				<img
					class="h-72 w-auto rounded-lg object-contain opacity-60 shadow-lg duration-200 hover:opacity-100"
					width="463"
					height="618"
					src="/pfp2.webp"
					alt="Zachiah Sawyer"
				/>
			</div>
			<Skill
				url="/skills/developer"
				text="Software Engineer"
				colors="bg-sky-950 from-sky-950 to-green-800 text-white"
			/>
			<Skill url="/skills/pianist" text="Pianist" colors="bg-sky-500 from-sky-500 to-green-800 text-white" />
			<Skill
				url="/skills/bjj"
				text="Jiujitsu Practitioner"
				colors="bg-sky-500 from-sky-500 to-green-500 text-black"
			/>
			<Skill
				url="https://chess.com/member/zachiah1"
				text="Chess Player"
				colors="bg-sky-950 from-sky-950 to-green-500 text-white"
			/>
			<Skill
				url="/skills/trampoliner"
				text="Trampoliner"
				colors="bg-sky-950 from-sky-950 to-green-800 text-white"
			/>
			<Skill
				url="/skills/origamist"
				text="Origamist"
				colors="bg-sky-950 from-sky-950 to-green-500 text-white"
			/>
		</div>
	</div>
</PageSection>
