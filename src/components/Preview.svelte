<script lang="ts">
	export let full_slug: string
	export let className: string = ''
	export let content: { date?: string; name?: string; intro?: string }

	$: display = content?.date ? new Date(content.date).toLocaleDateString() : null
</script>

<div
	class={['group relative overflow-hidden rounded-xl border duration-200 hover:border-black dark:border-gray-600 dark:hover:border-white md:gap-8', className]
		.map((i) => i.trim())
		.join(' ')
		.trim()}
>
	<a href={full_slug}>
		<article class="p-4 md:p-8">
			{#if display}
				<div class="flex items-center justify-between gap-2">
					<span class="text-xs text-slate-600 duration-200 dark:text-slate-400">
						<time datetime={content.date}>
							{display}
						</time>
					</span>
				</div>
			{/if}
			<h2 class="mt-2 text-xl font-medium lg:text-3xl">{content.name}</h2>
			<p class="mt-4 font-light text-gray-400">{content.intro}</p>
		</article>
	</a>
</div>
