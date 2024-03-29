<script lang="ts">
	import { onMount } from 'svelte'

	export let index: number
	export let className: string = ''
	export let hide: { name: number; description: number } = { name: 0, description: 0 }
	export let video: { content: { name?: string; thumbnail?: { filename?: string }; video?: string; description?: string } }

	let iframeSrc = ''

	onMount(() => {
		if (video.content.video) iframeSrc = video.content.video

		const selector = document.getElementById(`video-${index}`)

		if (selector) {
			selector.addEventListener('load', () => {
				document.getElementById(`overlay-${index}`)?.remove()
			})
		}

		return () => {
			if (selector) {
				selector.removeEventListener('load', () => {
					document.getElementById(`overlay-${index}`)?.remove()
				})
			}
		}
	})
</script>

<div class={['relative flex w-full flex-col', className].join(' ')}>
	{#if video.content.thumbnail && video.content.thumbnail.filename}
		<img
			id={`overlay-${index}`}
			alt={video.content.name}
			src={video.content.thumbnail.filename}
			loading={index === 0 ? 'eager' : 'lazy'}
			class="absolute left-0 top-0 aspect-video h-[300px] w-full rounded-lg object-cover"
		/>
	{/if}
	{#if video.content.video && video.content.video.includes('youtu')}
		<iframe
			allowfullscreen
			id={`video-${index}`}
			title={video.content.name}
			{...iframeSrc && { src: iframeSrc }}
			loading={index === 0 ? 'eager' : 'lazy'}
			class="aspect-video h-[300px] w-full rounded-lg border hover:shadow-2xl dark:border-gray-600"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		/>
	{:else}
		<video
			controls
			preload="none"
			id={`video-${index}`}
			title={video.content.name}
			class="aspect-video w-full rounded-lg"
			{...video.content.thumbnail && { poster: video.content.thumbnail.filename }}
		>
			<source src={video.content.video} type="video/mp4" />
			<track kind="captions" />
		</video>
	{/if}
	{#if video.content.name && hide.name === 0}
		<span class="text-md mt-4 font-medium sm:text-xl">
			{video.content.name}
		</span>
	{/if}
	{#if video.content.description && hide.description === 0}
		<div class="mt-2 w-full font-light">
			{@html video.content.description}
		</div>
	{/if}
</div>
