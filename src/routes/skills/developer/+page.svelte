<script>
	import Content from '$lib/components/Content.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
	title="Zachiah Sawyer | Software Engineer"
	description="My name is Zachiah Sawyer. I am a software engineer. Here are some links showing my skills and past experience."
/>

<Content>
	<h1>I am a software engineer</h1>
	<hr />

	<h2>Links</h2>
	<ul>
		<li>
			<a href="https://github.com/zachiah"> My GitHub profile </a>
		</li>
		<li>
			<a href="https://stackoverflow.com/users/10892722/zachiah"> My StackOverflow profile </a>
		</li>
		<li>
			<a href="https://profile.indeed.com/p/zachiahs-rjmh6x5"> My Resume </a>
		</li>
		<li>
			<a href="https://www.freelancer.com/u/zachiahsawyer"> My freelancer.com profile </a>
		</li>
	</ul>

	<h2>Projects</h2>
	<ul>
		<li>
			<a href="https://timeline.zachiah.com"> Timeline of my life </a>
		</li>
		<li>
			<a href="https://svelte-conways-game-of-life.netlify.app/"> Conway's Game of Life </a>
		</li>
		<li>
			<a href="https://github.com/Zachiah/lots-of-langs"> lots-of-langs </a>
		</li>
		<li>
			<a href="https://github.com/Zachiah/taita"> Taita </a>
		</li>
	</ul>

	<h2>Tools I Use</h2>
	<ul>
		<li>
			<a href="https://neovim.io/"> Neovim (BTW) </a>
		</li>
		<li>
			<a href="https://github.com/tmux/tmux/wiki"> Tmux </a>
		</li>
		<li>
			<a href="https://nixos.org/"> Nix & NixOS </a>
		</li>
		<li>
			<a href="https://swaywm.org/"> Sway </a>
		</li>
		<li>
			<a href="https://github.com/zachiah/taita"> Taita </a>
		</li>
		<li>
			<a href="https://alacritty.org/"> Alacritty </a>
		</li>
	</ul>

	<h2>Languages I have experience with</h2>
	<ul>
		<li>
			<a href="https://rust-lang.org">Rust</a>
		</li>
		<li>
			<a href="https://typescript-lang.org">TypeScript</a>
		</li>
		<li>
			<a href="https://www.php.net/">PHP</a>
		</li>
		<li>
			<a href="https://www.python.org/">Python</a>
		</li>
	</ul>

	<h2>Languages I'm interested in mastering</h2>
	<ul>
		<li>
			<a href="https://rust-lang.org">Rust</a>
		</li>
		<li>
			<a href="https://go.dev/">Go</a>
		</li>
		<li>
			<a href="https://en.wikipedia.org/wiki/C_(programming_language)">C</a>
		</li>
		<li>
			<a href="https://www.haskell.org">Haskell</a>
		</li>
	</ul>

	<h2>About my development journey</h2>
	<p>
		As far as I can tell, I started programming in March 2018. There was a book at the library
		called "Electrical Engineering for Dummies" which I saw and decided to read. At the end there
		was a section on programming a raspberry pi using python so I decided to get a raspberry pi and
		start with that. Before I knew it I was more into programming then electrical engineering. After
		that I continued learning many different programming languages, frameworks, tools, and such over
		the years. I made my first money programming in October 2019 through{' '}<a
			href="https://freelancer.com">Freelancer</a
		>. I started working for <a href="https://www.cloudone.com">CloudOne</a> in May of 2023.
	</p>

	<h2>About my approach to software development</h2>
	<p>
		I am very passionate about writing good software. There are numerous things that go into whether
		or not software is "good" but here are some of the top things in my opinion:
	</p>
	<ul class="spaced">
		<li>
			<b>Correctness:</b> Software should be correct. If it doesn't do what it is supposed to, then not
			much else matters
		</li>
		<li>
			<b>Accessibility / Ease of use:</b> If your users can't use your software then it doesn't matter
			how good the idea is or how interesting the internals are
		</li>
		<li>
			<b>Reliability:</b> No one likes to use software that isn't reliable. Users shouldn't have to look
			for workarounds in order to use your software. It should "Just Work" as close to 100% of the time
			as possible. It is important to consider edge cases that aren't in the happy path.
		</li>
		<li>
			<b>Maintainability:</b> A hallmark of bad software is that it is difficult to maintain. Of course
			this is subjective, but if it takes exponentially longer to develop each new feature then you know
			something has probably gone awry. Also I don't think that software is more or less maintainable
			inherently because it follows some particular design pattern or philosophy. I have a preference
			for functional programming where it makes sense, but also use imperative and object oriented programming
			patterns when I feel they better suite the problem.
		</li>
		<li>
			<b>Performance:</b> Software should be performant as a default. There are some cases where writing
			code in the most performant way requires sacrificing heavily on some of the other items on this
			list, and for those cases I will often sacrifice a bit of performance. The important thing in my
			opinion is that you always have performance on your mind as you develop software. If you need to
			rewrite some of it later to be slightly more performant then you should be able to do so provided
			you have considered that outcome already due to being performance-conscious from day 1. There is
			definitely a balance between maintainability and performance and I do acknowledge that they can
			often be at odds. Where exactly the software I'm writing falls on the spectrum is based on the
			business requirements and particular problem domain.
		</li>
		<li>
			<b>Beauty:</b> Good software should be beautiful. This is very subjective, but I don't enjoy building
			software that I hate looking at and will almost always take a little extra time to make things
			look pretty even if it isn't the top priority.
		</li>
	</ul></Content
>
