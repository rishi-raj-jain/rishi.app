<script lang="ts">
	import type { PageData } from './$types'
	import Seo from '@/src/components/Seo.svelte'

	export let data: PageData
</script>

<Seo title="Blogs - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">Blogs</h1>
<span class="mt-4 text-lg font-light text-slate-600">I've been writing since 13<sup>th</sup> March, 2020 around web development and design ✍🏻</span>
<ol class="mt-3 flex w-full list-decimal flex-col">
	{#each data.posts as item}
		<li>
			{#if item.slug}
				<a href={`/blog/${item.slug}`} class="mt-1 hover:underline">
					{item.content.title}
				</a>
			{:else}
				<a rel="noopener" target="_blank" href={item.content.Url.url} class="mt-1 hover:underline">
					{item.content.Title}
				</a>
			{/if}
		</li>
	{/each}
</ol>

<style>
	ol {
		-moz-transform: rotate(180deg);
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
	}
	ol > li {
		-moz-transform: rotate(-180deg);
		-webkit-transform: rotate(-180deg);
		transform: rotate(-180deg);
	}
</style>
