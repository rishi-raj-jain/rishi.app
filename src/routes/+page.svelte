<script lang="ts">
	import Seo from '@/src/components/Seo.svelte'
	import Socials from '@/src/components/Socials.svelte'
</script>

<Seo preloads={[{ as: 'image', href: 'https://ik.imagekit.io/vjeqenuhn/static/headshot.jpeg' }]} />

<div class="flex flex-col gap-y-8">
	<div class="flex flex-row gap-x-4 items-center">
		<img
			width="32px"
			height="32px"
			class="size-[32px] rounded-full"
			alt="Rishi Raj Jain in his favourite attire"
			src="https://ik.imagekit.io/vjeqenuhn/static/headshot.jpeg?tr=w-30"
		/>
		<h1 class="text-2xl font-semibold">Rishi Raj Jain</h1>
	</div>
	<p class="text-md font-light">I am a software engineer and a technical writer. On the side, I'm developing and marketing <a class="text-[#8714bd]" href="https://www.launchfa.st" target="_blank"><u>LaunchFast</u></a>, sharing thoughts in a <a class="text-[#ff6719]" href="https://rishirajjain.substack.com" target="_blank"><u>newsletter</u></a> and growing collection of <a class="text-black" href="/blogs"><u>technical blogs</u></a>.</p>
	<Socials />
</div>
