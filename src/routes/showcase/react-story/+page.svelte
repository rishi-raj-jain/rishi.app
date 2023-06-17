<script>
	import { onMount } from 'svelte'
	import Seo from '@/src/components/Seo.svelte'

	let embedURL = ''
	onMount(() => {
		embedURL = 'https://www.youtube.com/embed/r1BMNqI5Uwk'
	})
</script>

<Seo preloads={[{ as: 'image', href: 'https://ik.imagekit.io/vjeqenuhn/showcase/React_Story/row-1-column-1.png' }]} title="React Story - Rishi Raj Jain" />

{#each new Array(5).fill(0) as _, index}
	<img alt="Showcase Story" loading="lazy" class="w-full rounded border shadow" src={`https://ik.imagekit.io/vjeqenuhn/showcase/React_Story/row-${index + 1}-column-1.png`} />
{/each}

<iframe
	loading="lazy"
	src={embedURL}
	frameborder="0"
	allowfullscreen
	class="bg-gray mt-12 aspect-video min-w-full max-w-max rounded"
	title="Rishi Raj Jain - Establishing Fastest Online Presence with Next.js, Storyblok and Layer0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
/>
