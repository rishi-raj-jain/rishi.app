<script>
	import Seo from '@/src/components/Seo.svelte'
	import Video from '@/src/components/Video.svelte'
</script>

<Seo preloads={[{ as: 'image', href: 'https://ik.imagekit.io/vjeqenuhn/showcase/React_Story/row-1-column-1.png' }]} title="React Story - Rishi Raj Jain" />

{#each new Array(5).fill(0) as _, index}
	<img alt="Showcase Story" loading="lazy" class="w-full rounded border shadow" src={`https://ik.imagekit.io/vjeqenuhn/showcase/React_Story/row-${index + 1}-column-1.png`} />
{/each}

<Video
	index={1}
	className="mt-8"
	hide={{
		name: 1,
		description: 1
	}}
	video={{
		content: {
			video: 'https://www.youtube.com/embed/r1BMNqI5Uwk',
			name: 'Rishi Raj Jain - Establishing Fastest Online Presence with Next.js, Storyblok and Layer0'
		}
	}}
/>
