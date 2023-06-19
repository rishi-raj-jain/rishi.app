<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
	import Preview from '@/src/components/Preview.svelte'

	$: countGroups = Math.floor(data.items.length / 3)
	$: groups = new Array(countGroups).fill(0).map((_, __) => __)
</script>

<Seo title="Showcase - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">Showcase</h1>
<div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
	{#each groups as group}
		{#if (group * 3) % 2 === 0}
			<Preview gap={false} {...data.items[group * 3]} />
		{/if}
		{#if data.items.length > group * 3 + 1}
			<div class="flex w-full flex-col gap-4">
				<Preview {...data.items[group * 3 + 1]} />
				{#if data.items.length > group * 3 + 2}
					<Preview {...data.items[group * 3 + 2]} />
				{/if}
			</div>
		{/if}
		{#if (group * 3) % 2 !== 0}
			<Preview gap={false} {...data.items[group * 3]} />
		{/if}
	{/each}
	{#if data.items.length > countGroups * 3}
		{#each data.items.slice(countGroups * 3) as item}
			<Preview {...item} />
		{/each}
	{/if}
</div>
