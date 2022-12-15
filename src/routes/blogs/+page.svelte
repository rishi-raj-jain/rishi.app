<script>
	import DateString from '../DateString.svelte';
	import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.cjs';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="flex flex-col">
	<h1 class="text-2xl font-bold sm:text-5xl">Blogs</h1>
	<h2
		class={`font-regular text-md mt-5 whitespace-pre-line dark:text-gray-400 sm:text-xl ${
			data.blogsTagline ? '' : 'bg-black dark:bg-gray-400 animate-pulse'
		}`}
	>
		{@html data.blogsTagline ? new RichTextResolver().render(data.blogsTagline) : 'placeholder tagline'}
	</h2>
	<div class="flex flex-row flex-wrap">
		<div class="mt-10 flex w-full flex-col lg:mt-20 lg:w-2/3 lg:pr-10">
			{#each data.allPosts as item}
				<div class="mb-10 flex flex-col border-b pb-10 dark:border-gray-700">
					<span
						id={`first_published_at_${item.first_published_at}`}
						class={`text-gray-700 dark:text-gray-400 ${
							item && item.first_published_at ? '' : 'animate-pulse bg-gray-700 dark:bg-gray-400 w-[250px]'
						}`}
					>
						<DateString date={new Date(item.first_published_at)} />
					</span>
					<a
						href={item && item.slug ? `/blog/${item.slug}` : ''}
						class={`mt-3 hover:underline text-lg font-bold sm:text-2xl ${item && item.slug ? '' : 'bg-black animate-pulse'}`}
					>
						{item && item.content ? item.content.title : 'placeholder title'}
					</a>
					<span
						class={`mt-3 text-sm text-gray-700 line-clamp-2 dark:text-gray-400 ${
							item && item.content ? '' : 'bg-gray-700 dark:bg-gray-400 animate-pulse w-[200px]'
						}`}
					>
						{item && item.content ? item.content.intro : 'placeholder intro'}
					</span>
					<a
						href={item && item.slug ? `/blog/${item.slug}` : ''}
						class={`mt-5 text-sm uppercase text-blue-500 hover:underline ${item && item.slug ? '' : 'bg-blue-500 animate-pulse w-[100px]'}`}
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
						item && item.content ? '' : 'bg-gray-500 dark:bg-gray-400 animate-pulse'
					}`}
				>
					{item && item.content ? item.content.Title : 'placeholder title'}
				</a>
			{/each}
		</div>
	</div>
</div>
