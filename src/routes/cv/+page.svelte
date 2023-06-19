<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import { cv } from './data'
	import Seo from '@/src/components/Seo.svelte'
</script>

<Seo title="CV - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">CV</h1>
<h2 class="font-regular text-md mt-8 whitespace-pre-line dark:text-gray-200 sm:text-xl">About</h2>
{@html data.tagline}
{#each Object.keys(cv) as i}
	<div class="mt-8 flex flex-col gap-y-4">
		<a href={`#${i}`} id={i} class="font-regular text-md mt-5 whitespace-pre-line dark:text-gray-200 sm:text-xl">
			{i}
		</a>
		{#if cv.hasOwnProperty(i)}
			{#each cv[i] as j}
				<div class="flex flex-col gap-x-10 gap-y-2 md:flex-row md:gap-y-0">
					<p class="min-w-[100px] font-light text-gray-400">{j.name}</p>
					<a target="_blank" rel="noreferrer" href={j.href || '#'} class="flex flex-row items-center justify-start font-light text-black hover:underline dark:text-slate-200">
						{j.title} &#x2197;
					</a>
				</div>
			{/each}
		{/if}
	</div>
{/each}
