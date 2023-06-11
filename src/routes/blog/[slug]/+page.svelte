<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
	import Author from '@/src/components/Author.svelte'
	import Comments from '@/src/components/Comments.svelte'
	import MorePosts from '@/src/components/MorePosts.svelte'
	import DateString from '@/src/components/DateString.svelte'

	let comments: any[] = []
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
		<Comments slug={data.slug} />
		<div class="mt-10 w-full border-t pt-10 dark:border-gray-500">
			<button
				on:click={() => {
					comments = new Array(3).fill(0).map((_) => ({ loading: true, time: new Date().getMilliseconds() }))
					const commentURL = new URL('/', 'https://comments.rishi.app')
					commentURL.searchParams.set('slug', data.slug)
					fetch(commentURL.toString())
						.then((res) => res.json())
						.then((res) => {
							if (res) {
								comments = res
							}
						})
				}}
				class="w-[200px] appearance-none rounded border px-5 py-2 text-center hover:bg-gray-100 dark:border-gray-500 dark:hover:bg-[#28282B]"
			>
				Load Comments
			</button>
		</div>
		{#if comments && comments.length > 0}
			{#each comments.sort((a, b) => (new Number(a.time) > new Number(b.time) ? -1 : 1)) as item}
				{#if item.loading}
					<div class="mt-5 flex w-full flex-col rounded border p-5 dark:border-gray-500">
						<span class="flex flex-row items-center gap-x-5 text-lg font-medium">
							<span class="w-[50px] animate-pulse bg-gray-100 py-1" />
							<span class="text-gray-500 dark:text-gray-300">&middot;</span>
							<span class="w-[50px] animate-pulse bg-gray-100 py-1" />
						</span>
						<span class="text-md mt-3 h-[20px] w-full animate-pulse bg-gray-100 dark:bg-gray-300" />
					</div>
				{:else}
					<div class="mt-5 flex w-full flex-col rounded border p-5 dark:border-gray-500">
						<span class="text-lg font-medium text-gray-500 dark:text-gray-300">
							{item.name} &middot; {new Date(1000 * item.time).toLocaleDateString()}
						</span>
						<span class="text-md mt-3 text-gray-500 dark:text-gray-300">{item.content}</span>
					</div>
				{/if}
			{/each}
		{/if}
		{#await data.streamed.morePosts then value}
			<MorePosts posts={value} />
		{/await}
	</div>
</div>
