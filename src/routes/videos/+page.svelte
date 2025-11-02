<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
	import Video from '@/src/components/Video.svelte'
</script>

<Seo preloads={[{ as: 'image', href: data.videos[0].content.thumbnail.filename }]} title="Technical Videos - Rishi Raj Jain" />

<h1 class="text-2xl font-bold">Videos</h1>
<p class="mt-2 font-light">Here's a collection of my technical videos and presentations.</p>

<div class="grid md:grid-cols-2 md:gap-8">
	<div class="relative mt-6 flex w-full flex-col [&>iframe]:h-[300px]">
		<blockquote class="twitter-tweet m-0 p-0" data-media-max-width="560">
			<a href="https://twitter.com/rishi_raj_jain_/status/1970523768112972003" />
		</blockquote>
		<span class="mt-4 font-medium"> An overview of Subscription Trials in Polar </span>
	</div>
	<div class="relative mt-6 flex w-full flex-col [&>iframe]:h-[300px]">
		<blockquote class="twitter-tweet m-0 p-0" data-media-max-width="560">
			<a href="https://twitter.com/rishi_raj_jain_/status/1970253494872354987" />
		</blockquote>
		<span class="mt-4 font-medium"> Use Polar to receive payments for your Framer templates </span>
	</div>
	<div class="relative mt-6 flex w-full flex-col [&>iframe]:h-[300px]">
		<blockquote class="twitter-tweet m-0 p-0" data-media-max-width="560">
			<a href="https://twitter.com/rishi_raj_jain_/status/1969086240499597608" />
		</blockquote>
		<span class="mt-4 font-medium"> Use Dub to to shorten and empower your Polar checkout links with analytics </span>
	</div>
	{#if data.videos}
		{#each data.videos as video, _}
			<Video className="mt-8" index={_} {video} />
		{/each}
	{/if}
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
