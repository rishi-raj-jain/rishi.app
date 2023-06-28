<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
	import Preview from '@/src/components/Preview.svelte'
</script>

<Seo title="Showcase - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">Showcase</h1>

<div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
	{#if data.items.length > 0}
		{#each data.items as item}
			<Preview {...item} />
		{/each}
	{/if}
</div>
