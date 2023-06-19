<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
	import Preview from '@/src/components/Preview.svelte'
</script>

<Seo title="Showcase - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">Showcase</h1>
<div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
	<Preview {...data.items[0]} />
	{#if data.items.length > 1}
		<div class="flex w-full flex-col gap-4">
			<Preview {...data.items[1]} />
			{#if data.items.length > 2}
				<Preview {...data.items[2]} />
			{/if}
		</div>
	{/if}
	{#if data.items.length > 3}
		{#each data.items.slice(3) as item}
			<Preview {...item} />
		{/each}
	{/if}
</div>
