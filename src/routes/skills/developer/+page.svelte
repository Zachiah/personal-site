<script>
	import Content from '$lib/components/Content.svelte';
	import Project from './Project.svelte';
	import SEO from '$lib/components/SEO.svelte';

	const tools = [
		'JavaScript',
		'TypeScript',
		'Python',
		'Ruby',
		'Golang',
		'Rust',
		'PHP',
		'Git',
		'GitHub',
		'GitHub Actions',
		'Node.js',
		'Jest',
		'Vitest',
		'Playwright',
		'Webpack',
		'Rollup',
		'Vite',
		'Esbuild',
		'HTML',
		'ReactJS',
		'SvelteJS',
		'VueJS',
		'SolidJS',
		'jQuery',
		'RxJS',
		'Socket.io',
		'HTMX',
		'CSS',
		'TailwindCSS',
		'WindiCSS',
		'UnoCSS',
		'CSS Modules',
		'Bootstrap',
		'Bulma',
		'MaterializeCSS',
		'Vuetify',
		'Quasar',
		'Material UI',
		'Flask',
		'Django',
		'Ruby on Rails',
		'Laravel',
		'Actix web',
		'Axum',
		'Wordpress',
		'Express',
		'Koa',
		'Matplotlib',
		'Prisma',
		'Firebase',
		'Supabase',
		'MySQL',
		'MariaDB',
		'PostgreSQL',
		'Azure',
		'Twilio Flex',
		'Linux',
		'Debian',
		'Ubuntu',
		'Amazon Linux',
		'Amaon EC2',
		'NixOS',
		'Nix',
		'Arch Linux',
		'MacOS',
		'Homebrew',
		'Bash',
		'Zsh',
		'Docker',
		'Docker Compose'
	];
</script>

<SEO
	title="Zachiah Sawyer | Software Engineer"
	description="My name is Zachiah Sawyer. I am a software engineer. Here are some links showing my skills and past experience."
/>

<section
	class="flex min-h-[40rem] flex-wrap-reverse items-center justify-center gap-8 bg-white p-12 dark:bg-black"
>
	<img
		src="/pfp2.webp"
		alt="Zachiah Sawyer"
		class="max-h-[50vh] w-auto rounded-md shadow-lg"
		style="aspect-ratio: 3/4"
		width="463"
		height="618"
	/>

	<div class="flex flex-col gap-8">
		<h1 class="mt-16 px-4 text-4xl">Zachiah Sawyer | Software Engineer</h1>

		<div class="flex flex-wrap text-slate-800 dark:text-slate-200">
			<a class="border-r border-slate-200 px-4 font-mono dark:border-white" href="tel:+13603699991"
				>(360) 369-9991</a
			>
			<a
				class="box-content w-[17ch] border-r border-slate-200 px-4 font-mono dark:border-white"
				href="mailto:zachiah@proton.me">zachiah@proton.me</a
			>
			<a
				class="border-r border-slate-200 px-4 font-mono dark:border-white"
				href="https://github.com/zachiah">GitHub</a
			>
			<a
				class="border-r border-slate-200 px-4 font-mono dark:border-white"
				href="https://stackoverflow.com/users/10892722/zachiah">StackOverflow</a
			>
			<a
				class="border-r border-slate-200 px-4 font-mono dark:border-white"
				href="/resume-trimmed.pdf"
				download="zachiah-sawyer-resume.pdf">Resume</a
			>
			<a class="px-4 font-mono" href="https://www.freelancer.com/u/zachiahsawyer">freelancer.com</a>
		</div>
	</div>
</section>

<section class="bg-slate-200 p-12 dark:bg-slate-800">
	<div class="mx-auto flex min-h-[40rem] max-w-[190ch] flex-col items-center justify-center">
		<h2 class="mb-24 text-center text-4xl">Some Personal Projects</h2>

		<div class="flex w-full flex-wrap gap-12">
			<Project href="/">This Website</Project>
			<Project href="https://timeline.zachiah.com">Timeline of My Life</Project>
			<Project href="https://simon.zachiah.com">Simon (WIP)</Project>
			<Project href="https://conway.zachiah.com">Conway's Game of Life</Project>
			<Project href="https://github.com/Zachiah/lots-of-langs">Lots of Langs</Project>
			<Project href="https://github.com/Zachiah/taita">Taita</Project>
		</div>
	</div>
</section>

<section
	class="flex min-h-[40rem] flex-col items-center justify-center bg-white p-12 dark:bg-black"
>
	<div class="max-w-[190ch]">
		<h2 class="mb-24 text-center text-4xl">
			Long list of technologies I have experience with (incomplete)
		</h2>

		<ul
			class="flex max-h-[50vh] w-auto flex-wrap gap-4 overflow-auto rounded-md p-4 shadow-inner shadow-white"
		>
			{#each tools as tool}
				<li class="w-full rounded-md bg-slate-200 px-4 py-2 font-mono dark:bg-slate-600 2xs:w-auto">
					{tool}
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="bg-slate-200 p-8 dark:bg-slate-800">
	<div class="mx-auto flex max-w-[190ch] flex-wrap gap-8">
		<div
			class="flex-1 rounded-md bg-white p-4 shadow-md dark:bg-black dark:shadow-none xs:min-w-[18rem]"
		>
			<Content>
				<h2>Development Tools I Use</h2>
				<ul>
					<li>
						<a href="https://neovim.io/">Neovim (BTW)</a>
					</li>
					<li>
						<a href="https://github.com/tmux/tmux/wiki">Tmux</a>
					</li>
					<li>
						<a href="https://nixos.org/">Nix & NixOS</a>
					</li>
					<li>
						<a href="https://swaywm.org/">Sway</a>
					</li>
					<li>
						<a href="https://github.com/zachiah/taita">Taita</a>
					</li>
					<li>
						<a href="https://alacritty.org/">Alacritty</a>
					</li>
				</ul>
			</Content>
		</div>

		<div
			class="flex-1 rounded-md bg-white p-4 shadow-md dark:bg-black dark:shadow-none xs:min-w-[18rem]"
		>
			<Content>
				<h2>Language experience</h2>
				<ul>
					<li>Rust (1yr)</li>
					<li>TypeScript (3-4yrs)</li>
					<li>PHP (2yrs)</li>
					<li>Python (3yrs)</li>
					<li>Golang (1yr)</li>
					<li>Ruby (1yr)</li>
				</ul>
			</Content>
		</div>

		<div
			class="flex-1 rounded-md bg-white p-4 shadow-md dark:bg-black dark:shadow-none xs:min-w-[18rem]"
		>
			<Content>
				<h2>Really want to learn</h2>
				<ul>
					<li>C</li>
					<li>Haskell</li>
					<li>OCaml</li>
					<li>Swift</li>
				</ul>
			</Content>
		</div>
	</div>
</section>

<section class="bg-white p-8 dark:bg-black">
	<div class="mx-auto max-w-prose">
		<Content>
			<h2>About my development journey</h2>
			<p>
				As far as I can tell, I started programming in March 2018. There was a book at the library
				called "Electrical Engineering for Dummies" which I saw and decided to read. At the end
				there was a section on programming a raspberry pi using python so I decided to get a
				raspberry pi and start with that. Before I knew it I was more into programming then
				electrical engineering. After that I continued learning many different programming
				languages, frameworks, tools, and such over the years.
			</p>

			<p>
				I started freelancing in October 2019 and I’ve continued freelancing up until now. I have
				had the opportunity to work for various individuals and companies and in so doing to work on
				a myriad of different things including frontends, backends, web scrapers, and data
				visualizations.
			</p>

			<p>
				In May of 2023 I started working for CloudOne (an omnichannel digital marketing company) in
				Vancouver WA. I worked there for just under a year until I moved to Idaho and had to end
				that engagement. In this role I worked as a Full Stack Software Developer. My day to day
				involved updating APIs written in PHP, rewriting and patching legacy PHP code, writing new
				sites in modern stacks and implementing features for the company backend interface as they
				were needed.
			</p>

			<p>
				I am currently actively searching for a job in software. If you think I'd be a good fit for
				your company please contact me at <a href="tel:+13603699991">(360) 369-9991</a>.
			</p>

			<h2>About my approach to software development</h2>
			<p>
				I am very passionate about writing good software. There are numerous things that go into
				whether or not software is "good" but here are some of the top things in my opinion:
			</p>
			<ul class="spaced">
				<li>
					<b>Correctness:</b> Software should be correct. If it doesn't do what it is supposed to, then
					not much else matters
				</li>
				<li>
					<b>Accessibility / Ease of use:</b> If your users can't use your software then it doesn't matter
					how good the idea is or how interesting the internals are
				</li>
				<li>
					<b>Reliability:</b> No one likes to use software that isn't reliable. Users shouldn't have
					to look for workarounds in order to use your software. It should "Just Work" as close to 100%
					of the time as possible. It is important to consider edge cases that aren't in the happy path.
				</li>
				<li>
					<b>Maintainability:</b> A hallmark of bad software is that it is difficult to maintain. Of
					course this is subjective, but if it takes exponentially longer to develop each new feature
					then you know something has probably gone awry. Also I don't think that software is more or
					less maintainable inherently because it follows some particular design pattern or philosophy.
					I have a preference for functional programming where it makes sense, but also use imperative
					and object oriented programming patterns when I feel they better suit the problem.
				</li>
				<li>
					<b>Performance:</b> Software should be performant as a default. There are some cases where
					writing code in the most performant way requires sacrificing heavily on some of the other items
					on this list, and for those cases I will often sacrifice a bit of performance. The important
					thing in my opinion is that you always have performance on your mind as you develop software.
					If you need to rewrite some of it later to be slightly more performant then you should be able
					to do so provided you have considered that outcome already due to being performance-conscious
					from day 1. There is definitely a balance between maintainability and performance and I do
					acknowledge that they can often be at odds. Where exactly the software I'm writing falls on
					the spectrum is based on the business requirements and particular problem domain.
				</li>
				<li>
					<b>Beauty:</b> Good software should be beautiful. This is very subjective, but I don't enjoy
					building software that I hate looking at and will almost always take a little extra time to
					make things look pretty even if it isn't the top priority.
				</li>
			</ul>
		</Content>
	</div>
</section>
