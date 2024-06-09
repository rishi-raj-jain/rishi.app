<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import '@/src/routes/home.css'
	import Seo from '@/src/components/Seo.svelte'
	import Socials from '@/src/components/Socials.svelte'
	import LinkIcon from '~icons/ph/arrow-up'
</script>

<Seo preloads={[{ as: 'image', href: 'https://ik.imagekit.io/vjeqenuhn/static/favicon-image.jpg' }]} />

<div class="flex w-full flex-col justify-center">
	<div class="flex flex-col gap-x-8 lg:flex-row">
		<img
			alt="Rishi Raj Jain in his favourite attire"
			src="https://ik.imagekit.io/vjeqenuhn/static/favicon-image.jpg"
			class="aspect-square h-[300px] w-[300px] transform-gpu rounded"
			style={`background-image: url(${data.blurImage}); background-repeat: no-repeat; background-position: 50% 50%; background-size: cover;`}
		/>
		<div class="flex flex-col">
			<h1 class="mt-8 text-2xl font-bold sm:text-5xl lg:mt-0">Rishi Raj Jain</h1>
			{@html data.tagline}
			<div class="mt-6 h-[1px] w-full" />
			<Socials />
			<ul class="font-sm mt-4 flex flex-col space-x-0 space-y-2 text-neutral-500 md:flex-row md:space-x-4 md:space-y-0 lg:mt-auto">
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://twitter.com/intent/follow?screen_name=rishi_raj_jain_"
						class="flex items-center gap-x-1 transition-all hover:text-neutral-700"
					>
						<LinkIcon class="h-[50px] rotate-45" />
						<span>follow me on X</span>
					</a>
				</li>
				<li>
					<a target="_blank" rel="noopener noreferrer" href="https://rishirajjain.substack.com" class="flex items-center gap-x-1 transition-all hover:text-neutral-700">
						<LinkIcon class="h-[50px] rotate-45" />
						<span>get email updates</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
