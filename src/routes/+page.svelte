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
	<div class="flex flex-col gap-8 lg:flex-row">
		<img
			alt="Rishi Raj Jain in his favourite attire"
			src="https://ik.imagekit.io/vjeqenuhn/1677584426725_O0mYlJuu_.jpeg"
			class="aspect-square h-[100px] w-[100px] transform-gpu rounded-full"
			style={`background-image: url(${data.blurImage}); background-repeat: no-repeat; background-position: 50% 50%; background-size: cover;`}
		/>
		<div class="flex flex-col">
			<h1 class="text-2xl font-bold sm:text-5xl">Rishi Raj Jain</h1>
			<p class="mt-6 text-lg font-light text-slate-600">
				Hey 👋🏻 <br />I am a software engineer and a technical writer. On the side, I'm developing and marketing
				<a href="https://www.launchfa.st" target="_blank"><u>LaunchFast</u></a>. Feel free to go through my
				<a href="https://rishirajjain.substack.com" target="_blank"><u>newsletters</u></a>
				or read my <a href="/blogs"><u>blogs</u></a>.
			</p>
			<div class="mt-8 h-[1px] w-full" />
			<Socials />
			<ul class="mt-4 flex flex-row flex-wrap gap-4 text-slate-600">
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://twitter.com/intent/follow?screen_name=rishi_raj_jain_"
						class="flex items-center gap-x-1 transition-all hover:text-neutral-700"
					>
						<LinkIcon class="h-[50px] rotate-45" />
						<span>follow me</span>
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
