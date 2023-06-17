<script>
	import { onMount } from 'svelte'
	import Seo from '@/src/components/Seo.svelte'

	let embedURL = ''
	onMount(() => {
		embedURL = 'https://www.youtube.com/embed/r1BMNqI5Uwk'
	})
</script>

<Seo title="React Story - Rishi Raj Jain" />

<img alt="Showcase Story" loading="lazy" class="w-full rounded border shadow" src="https://ik.imagekit.io/vjeqenuhn/showcase/React_Story/web.png" />

<iframe
	width="1038"
	height="584"
	loading="lazy"
	src={embedURL}
	frameborder="0"
	allowfullscreen
	class="min-w-full max-w-max"
	title="Rishi Raj Jain - Establishing Fastest Online Presence with Next.js, Storyblok and Layer0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
/>
