<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import renderRichText from '@/src/lib/render'
	import Seo from '@/src/components/Seo.svelte'
	import Socials from '@/src/components/Socials.svelte'
</script>

<Seo preloads={[{ as: 'image', href: 'https://ik.imagekit.io/vjeqenuhn/static/favicon-image.jpg' }]} />

<div class="flex min-h-[90vh] w-full flex-col justify-center">
	<div class="flex flex-col gap-x-8 lg:flex-row">
		<img
			alt="Rishi Raj Jain in his favourite attire"
			src="https://ik.imagekit.io/vjeqenuhn/static/favicon-image.jpg"
			class="aspect-square h-[300px] w-[300px] transform-gpu rounded"
		/>
		<div class="flex flex-col items-start">
			<h1 class="mt-8 text-2xl font-bold sm:text-5xl lg:mt-0">Rishi Raj Jain</h1>
			<h2 class="mt-4 text-lg text-gray-500 dark:text-white sm:text-xl">Technical Customer Success Manager at Edgio</h2>
			<Socials />
			<div class="mt-12 h-[1px] w-full bg-gray-200 dark:bg-gray-700" />
			<h2 class="text-md mt-12 text-gray-500 dark:text-white sm:text-lg">
				{@html renderRichText.render(data.tagline)}
			</h2>
		</div>
	</div>
</div>
