<script lang="ts">
	import Seo from '@/src/components/Seo.svelte'
	import Socials from '@/src/components/Socials.svelte'
	import LinkIcon from '~icons/ph/arrow-up'
</script>

<Seo preloads={[{ as: 'image', href: 'https://ik.imagekit.io/vjeqenuhn/static/headshot.jpeg' }]} />

<div class="flex flex-col gap-y-8">
	<img
		width="75px"
		height="75px"
		class="size-[75px] rounded-full"
		alt="Rishi Raj Jain in his favourite attire"
		src="https://ik.imagekit.io/vjeqenuhn/static/headshot.jpeg?tr=w-100"
	/>
	<h1 class="text-2xl font-bold sm:text-5xl">Rishi Raj Jain</h1>
	<p class="text-lg font-light text-slate-600">
		Hey 👋🏻 <br />I am a software engineer and a technical writer. On the side, I'm developing and marketing
		<a class="text-[#8714bd]" href="https://www.launchfa.st" target="_blank"><u>LaunchFast</u></a>. Feel free to go through my
		<a class="text-[#ff6719]" href="https://rishirajjain.substack.com" target="_blank"><u>newsletter</u></a>
		or read my <a class="text-black" href="/blogs"><u>blogs</u></a>.
	</p>
	<Socials />
	<ul class="flex flex-row flex-wrap gap-4 text-slate-600">
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
