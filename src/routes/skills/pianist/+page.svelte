<script>
	import SEO from '$lib/components/SEO.svelte';
	import SimplePageWrapper from '$lib/components/SimplePageWrapper.svelte';
</script>

<SEO
	title="Zachiah Sawyer | Piano"
	description="Hi my name is Zachiah Sawyer. This is my journey as a pianist."
/>

<SimplePageWrapper>
	<h1>I am a pianist</h1>

	<p>I have been playing piano since Septermber 2015</p>
	<p>
		I mostly play church music (hymns and such) although I have done a tiny bit of classical as
		well. I play based on music theory and a little bit of reading if available. Lately I've been
		experimenting a lot with the pentatonic scale and lots of tangential concepts.
	</p>
	<p>
		My favorite scale/key is probably phrygian dominant right now. I also like double harmonic
		major, but I find that the conflict between the flat 2 and the major 7 when played as a third is
		a bit hard to stomach, and when improvising I tend to rely heavily on thirds.
	</p>

	<h2>Some recordings I have</h2>

	<figure>
		<figcaption>Sweet hour of prayer instrumental piano</figcaption>
		<audio src="/audio/sweet-hour-of-prayer-instrumental.wav" controls />
	</figure>

	<figure>
		<figcaption>Great is Thy Faithfulness instrumental piano</figcaption>
		<audio src="/audio/great-is-thy-faithfulness.wav" controls />
	</figure>
</SimplePageWrapper>
