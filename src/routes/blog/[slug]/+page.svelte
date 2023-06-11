<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
	import Author from '@/src/components/Author.svelte'
	import MorePosts from '@/src/components/MorePosts.svelte'
	import DateString from '@/src/components/DateString.svelte'
</script>

<Seo title={`${data.blog.post.content.title} - Rishi Raj Jain`} />

<div class="flex w-full flex-col items-center">
	<div class="w-full md:max-w-2xl">
		<div class="flex w-full flex-col items-center">
			<span>
				<DateString date={new Date(data.blog.post.first_published_at)} />
			</span>
			<h1 class="mb-7 mt-3 text-center text-2xl font-bold sm:text-4xl">{data.blog.post.content.title}</h1>
			<Author post={data.blog.post} />
		</div>
		<div class="mt-7 h-[1px] w-full bg-gray-200" />
		<article class="prose mt-10 flex max-w-none flex-col items-center text-sm dark:prose-light">
			{@html data.blog.post.content.long_text}
		</article>
		{#await data.streamed.morePosts then value}
			<MorePosts posts={value} />
		{/await}
	</div>
</div>
