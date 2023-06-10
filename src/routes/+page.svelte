<script lang="ts">
	export let data: PageData

	import type { PageData } from './$types'
	import renderRichText from '@/src/lib/render'
	import Seo from '@/src/components/Seo.svelte'
	import SocialLinks from '@/src/components/SocialLinks.svelte'
</script>

<Seo />

<div class="md:justify-auto flex min-h-[90vh] flex-col justify-center md:flex-row md:items-center">
	<div class="flex w-full flex-col items-center justify-center md:w-1/2 md:items-start">
		<div class="filter md:hidden">
			<img alt="Something" width={120} height={120} src={`/static/favicon-image.jpg`} class="rounded-full grayscale" />
		</div>
		<h1 class="mt-5 text-2xl font-bold sm:text-5xl md:mt-0">Rishi Raj Jain</h1>
		<h2 class="mt-5 text-center text-lg text-gray-500 dark:text-white sm:text-xl md:text-left">Technical Customer Success Manager at Edgio</h2>
		<div class="flex flex-row space-x-5">
			<SocialLinks />
		</div>
		<div class="mt-10 h-[1px] w-full bg-gray-200 dark:bg-gray-700" />
		{#await data.streamed.tagline}
			<div class="mt-10 h-[20px] w-full animate-pulse bg-gray-400" />
		{:then value}
			<h2 class="text-md mt-10 text-center text-gray-500 dark:text-white sm:text-lg md:text-left">
				{@html renderRichText.render(value)}
			</h2>
		{/await}
	</div>
	<div class="hidden flex-col items-end justify-center md:flex md:w-1/2">
		<div class="grayscale filter">
			<img width={330} height={440} alt="Something" class="rounded object-cover" src={`/static/favicon-image.jpg`} />
		</div>
	</div>
</div>
