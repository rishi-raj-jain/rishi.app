<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
	import Video from '@/src/components/Video.svelte'
</script>

<Seo preloads={[{ as: 'image', href: data.videos[0].content.thumbnail.filename }]} title="Technical Videos - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">Videos</h1>

<a href="#About" class="font-regular text-md mt-4 whitespace-pre-line sm:text-xl">About</a>

<p class="mt-2 font-light text-slate-600">Here's a collection of my technical videos and presentations.</p>

<div class="grid md:grid-cols-2 md:gap-8">
	{#if data.videos}
		{#each data.videos as video, _}
			<Video className="mt-8" index={_} {video} />
		{/each}
	{/if}
</div>
