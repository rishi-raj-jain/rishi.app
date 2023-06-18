<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
</script>

<Seo title="Talks and Video Tutorials - Rishi Raj Jain" />

<div class="flex flex-col">
	<h1 class="text-2xl font-bold sm:text-5xl">Talks and Video Tutorials</h1>
	{#if data.videos}
		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each data.videos as video, _}
				<div class="flex w-full flex-col">
					{#if video.content.video.includes('youtu')}
						<iframe
							allowfullscreen
							src={video.content.video}
							title={video.content.name}
							loading={_ === 0 ? 'eager' : 'lazy'}
							class="aspect-video h-[300px] w-full rounded-lg border hover:shadow-2xl dark:border-gray-600"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						/>
					{:else}
						<video title={video.content.name} controls preload="none" poster={video.content.thumbnail.filename} class="aspect-video w-full rounded-lg">
							<source src={video.content.video} type="video/mp4" />
							<track kind="captions" />
						</video>
					{/if}
					<span class="text-md mt-4 font-medium sm:text-xl">
						{video.content.name}
					</span>
					<div class="mt-2 w-full font-light">
						{@html video.content.description}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
