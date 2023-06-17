<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
	import renderRichText from '@/src/lib/render'
	import DateString from '@/src/components/DateString.svelte'
</script>

<Seo title="Blogs - Rishi Raj Jain" />

<div class="flex flex-col">
	<h1 class="text-2xl font-bold sm:text-5xl">Blogs</h1>
	<h2 class="font-regular text-md mt-8 whitespace-pre-line dark:text-gray-400 sm:text-xl">
		{@html renderRichText.render(data.blogsTagline)}
	</h2>
	<div class="flex flex-row flex-wrap">
		<div class="mt-10 flex w-full flex-col items-center lg:mt-20 lg:w-2/3 lg:pr-10">
			<div class="relative columns-1 space-y-8">
				{#each data.allPosts as item, _}
					<a href={`/blog/${item.slug}`} class="flex flex-col border-b border-gray-200 dark:border-gray-800">
						<div class="flex break-inside-avoid flex-col">
							<div class="text-sm font-light text-slate-600 dark:text-slate-400">
								<DateString date={new Date(item.first_published_at)} />
							</div>
							<span class="mt-1 text-xl font-semibold hover:underline">{item.content.title}</span>
							<span class="mt-3 line-clamp-2 text-sm font-light text-slate-600 dark:text-slate-400">{item.content.intro}</span>
							<span class="mb-5 mt-5 text-sm uppercase text-blue-500 hover:underline">Read More &rarr;</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
		<div class="mt-0 flex w-full flex-col lg:mt-20 lg:w-1/3">
			<h4 class="text-md font-bold sm:text-lg">Recommended Posts</h4>
			{#each data.recommendedPosts as item}
				<a
					rel="noopener"
					target="_blank"
					href={item.content.Url.url}
					class="mt-5 truncate border-b pb-2 text-sm font-light text-slate-600 hover:underline dark:border-gray-700 dark:text-slate-400"
				>
					{item.content.Title}
				</a>
			{/each}
		</div>
	</div>
</div>
