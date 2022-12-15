<script>
	import DateString from '../../DateString.svelte';
	export let data;
	// /** @type {import('./$types').PageData} */
	// console.log(data);
</script>

<div class="flex w-full flex-col items-center">
	<div class="w-full md:max-w-2xl">
		<div class="flex w-full flex-col items-center">
			<span>
				<DateString date={new Date(data.post.first_published_at)} />
			</span>
			<h1 class="mt-3 mb-7 text-center text-2xl font-bold sm:text-4xl">{data.post.content.title}</h1>
			<!-- <Author post={data.post} /> -->
		</div>
		<div class="mt-7 h-[1px] w-full bg-gray-200" />
		<article class="flex flex-col items-center prose mt-10 max-w-none text-sm dark:prose-light">
			{@html data.post.content.long_text}
		</article>
		<!-- <Comments client:visible data={data} morePosts={morePosts} /> -->
	</div>
</div>
