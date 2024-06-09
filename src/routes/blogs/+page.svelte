<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
</script>

<Seo title="Blogs - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">Blogs</h1>
<span class="mt-4 text-lg font-light text-slate-600">I've been writing since 13<sup>th</sup> March, 2020 around web development and design ✍🏻</span>
<ol class="mt-3 flex w-full list-decimal flex-col">
	{#each data.recommendedPosts as item}
		<li>
			<a rel="noopener" target="_blank" href={item.content.Url.url} class="mt-1 hover:underline">
				{item.content.Title}
			</a>
		</li>
	{/each}
</ol>
