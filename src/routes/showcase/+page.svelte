<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import Seo from '@/src/components/Seo.svelte'
	import Preview from '@/src/components/Preview.svelte'
</script>

<Seo title="Showcase - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">Showcase</h1>

<a href="#About" class="font-regular text-md mt-4 whitespace-pre-line sm:text-xl">About</a>

<p class="mt-2 font-light text-slate-600">Here's a collection of my work and the projects I've built.</p>

{#if data.items.length > 0}
	<div class="mt-5 flex flex-col gap-y-4">
		{#each data.items as item}
			<Preview className="border-b py-8" {...item} />
		{/each}
	</div>
{/if}
