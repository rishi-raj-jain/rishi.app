<script lang="ts">
	export let full_slug: string
	export let gap: boolean = true
	export let className: string = ''
	export let content: { date?: string; name?: string; intro?: string; link?: { name?: string; href?: string } }

	$: display = content?.date ? new Date(content.date).toLocaleDateString() : null
</script>

<a
	href={full_slug}
	class={[className, 'flex flex-col rounded border p-4 duration-200 hover:shadow hover:shadow-black/15 md:p-8']
		.map((i) => i.trim())
		.join(' ')
		.trim()}
>
	{#if display}
		<div class="flex items-center justify-between gap-2">
			<span class="text-xs text-slate-600 duration-200">
				<time datetime={content.date}>
					{display}
				</time>
			</span>
		</div>
	{/if}
	<h2 class="mt-2 text-xl font-medium lg:text-3xl">{content.name}</h2>
	<p class="mt-4 font-light text-gray-400">{content.intro}</p>
	{#if gap}
		<div class="mt-4 hidden h-[1px] w-full lg:block" />
	{/if}
	<div class="mt-4 h-[1px] w-full lg:hidden" />
	{#if content.link && content.link.href && content.link.name}
		<a target="_blank" href={content.link.href} class="group mt-auto flex max-w-min flex-row items-end gap-x-2 border-b border-white hover:border-black">
			<span>
				{content.link.name}
			</span>
			<span class="text-sm text-gray-400 group-hover:text-black">&#8599;</span>
		</a>
	{/if}
</a>
