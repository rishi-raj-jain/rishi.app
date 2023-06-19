<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import renderRichText from '@/src/lib/render'
	import Seo from '@/src/components/Seo.svelte'
</script>

<Seo title="About - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">Rishi Raj Jain</h1>
<h2 class="font-regular text-md mt-8 whitespace-pre-line dark:text-gray-200 sm:text-xl">About</h2>
<p class="mt-2 font-light text-slate-600 dark:text-slate-400">
	{@html data.aboutTaglineHTML}
</p>
<h2 class="font-regular text-md mt-8 whitespace-pre-line dark:text-gray-200 sm:text-xl">Timeline</h2>
{#each Object.keys(data.Timeline).sort((a, b) => (a > b ? -1 : 1)) as item}
	<div class="mt-8 flex flex-col">
		<span class="text-xl font-bold dark:text-gray-400">{item}</span>
		{#each data.Timeline[item] as exp}
			<div class="relative mt-5 flex flex-row items-start space-x-5">
				<div class="mt-1 h-[21px] w-[12px]">
					<svg width="12" height="21" viewBox="0 0 16 16" class="fill-gray-800 dark:fill-gray-400" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
					</svg>
				</div>
				<div class="flex flex-col font-light text-slate-600 dark:text-slate-400">
					<span class="text-md font-semibold text-zinc-600 dark:text-gray-400 sm:text-lg">{exp.content.Title}</span>
					{@html renderRichText.render(exp.content.Description)}
				</div>
			</div>
		{/each}
	</div>
{/each}
