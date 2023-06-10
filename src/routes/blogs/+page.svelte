<script lang="ts">
	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
	import renderRichText from '@/src/lib/render'
	import DateString from '@/src/components/DateString.svelte'
</script>

<Seo title="Blogs - Rishi Raj Jain" pathname="/blogs/" />

<div class="flex flex-col">
	<h1 class="text-2xl font-bold sm:text-5xl">Blogs</h1>
	<h2 class={`font-regular text-md mt-5 whitespace-pre-line dark:text-gray-400 sm:text-xl ${data.blogsTagline ? '' : 'animate-pulse bg-black dark:bg-gray-400'}`}>
		{@html data.blogsTagline ? renderRichText.render(data.blogsTagline) : 'placeholder tagline'}
	</h2>
	<div class="flex flex-row flex-wrap">
		<div class="mt-10 flex w-full flex-col lg:mt-20 lg:w-2/3 lg:pr-10">
			{#each data.allPosts as item}
				<div class="mb-10 flex flex-col border-b pb-10 dark:border-gray-700">
					<span
						id={`first_published_at_${item.first_published_at}`}
						class={`text-gray-700 dark:text-gray-400 ${item && item.first_published_at ? '' : 'w-[250px] animate-pulse bg-gray-700 dark:bg-gray-400'}`}
					>
						<DateString date={new Date(item.first_published_at)} />
					</span>
					<a href={item && item.slug ? `/blog/${item.slug}` : ''} class={`mt-3 text-lg font-bold hover:underline sm:text-2xl ${item && item.slug ? '' : 'animate-pulse bg-black'}`}>
						{item && item.content ? item.content.title : 'placeholder title'}
					</a>
					<span class={`mt-3 line-clamp-2 text-sm text-gray-700 dark:text-gray-400 ${item && item.content ? '' : 'w-[200px] animate-pulse bg-gray-700 dark:bg-gray-400'}`}>
						{item && item.content ? item.content.intro : 'placeholder intro'}
					</span>
					<a
						href={item && item.slug ? `/blog/${item.slug}` : ''}
						class={`mt-5 text-sm uppercase text-blue-500 hover:underline ${item && item.slug ? '' : 'w-[100px] animate-pulse bg-blue-500'}`}
					>
						Read More &rarr;
					</a>
				</div>
			{/each}
		</div>
		<div class="mt-0 flex w-full flex-col lg:mt-20 lg:w-1/3">
			<h4 class="text-md font-bold sm:text-lg">Recommended Posts</h4>
			{#each data.recommendedPosts as item}
				<a
					target="_blank"
					rel="noreferrer"
					href={item && item.content ? item.content.Url.url : ''}
					class={`mt-5 truncate border-b pb-2 text-sm text-gray-500 hover:underline dark:border-gray-700 dark:text-gray-400 ${
						item && item.content ? '' : 'animate-pulse bg-gray-500 dark:bg-gray-400'
					}`}
				>
					{item && item.content ? item.content.Title : 'placeholder title'}
				</a>
			{/each}
		</div>
	</div>
</div>
