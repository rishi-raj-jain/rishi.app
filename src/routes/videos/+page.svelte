<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
	import Video from '@/src/components/Video.svelte'
</script>

<Seo preloads={[{ as: 'image', href: data.videos[0].content.thumbnail.filename }]} title="Talks and Video Tutorials - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">Talks and Video Tutorials</h1>

<div class="grid md:grid-cols-2 md:gap-8">
	{#if data.videos}
		{#each data.videos as video, _}
			<Video className="mt-8" index={_} {video} />
		{/each}
	{/if}
</div>
