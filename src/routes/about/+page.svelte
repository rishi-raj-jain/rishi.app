<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import renderRichText from '@/src/lib/render'
	import Seo from '@/src/components/Seo.svelte'
</script>

<Seo title={`About - Rishi Raj Jain`} />

<div class="flex w-full flex-col items-center text-[14px]">
	<div class="mt-10 flex w-[90vw] max-w-[540px] flex-col">
		<h1 class="text-3xl font-bold text-zinc-700 dark:text-gray-300">About Me</h1>
		{@html data.aboutTaglineHTML}
		<h2 class="mt-16 text-3xl font-bold text-zinc-700 dark:text-gray-300">My Timeline</h2>
		{#each Object.keys(data.Timeline).sort((a, b) => (a > b ? -1 : 1)) as item}
			<div class="mt-8 flex flex-col">
				<span class="text-lg font-semibold text-zinc-600 dark:text-gray-400">{item}</span>
				{#each data.Timeline[item] as exp}
					<div class="relative mt-5 flex flex-row items-start space-x-5">
						<div class="mt-1 h-[12px] w-[12px]">
							<svg width={12} height={12} viewBox="0 0 16 16" fill="currentColor" class="dark:text-gray-400" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
							</svg>
						</div>
						<div class="flex flex-col">
							<span class="text-md font-semibold text-zinc-600 dark:text-gray-400 sm:text-lg">{exp.content.Title}</span>
							{@html renderRichText.render(exp.content.Description)}
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
