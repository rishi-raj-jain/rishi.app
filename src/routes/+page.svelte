<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import renderRichText from '@/src/lib/render'
	import Seo from '@/src/components/Seo.svelte'
	import Socials from '@/src/components/Socials.svelte'
</script>

<Seo />

<div class="flex min-h-[90vh] w-full flex-col items-center md:flex-row md:justify-between">
	<img alt="Rishi Raj Jain in his favourite attire" src="/static/favicon-image.jpg" class="h-[250px] max-w-max transform-gpu rounded object-contain md:h-[500px]" />
	<div class="flex w-full flex-col items-center justify-center md:w-1/2 md:items-start">
		<h1 class="mt-5 text-2xl font-bold sm:text-5xl md:mt-0">Rishi Raj Jain</h1>
		<h2 class="mt-5 text-center text-lg text-gray-500 dark:text-white sm:text-xl md:text-left">Technical Customer Success Manager at Edgio</h2>
		<Socials />
		<div class="mt-10 h-[1px] w-full bg-gray-200 dark:bg-gray-700" />
		<h2 class="text-md mt-10 text-center text-gray-500 dark:text-white sm:text-lg md:text-left">
			{@html renderRichText.render(data.tagline)}
		</h2>
	</div>
</div>
