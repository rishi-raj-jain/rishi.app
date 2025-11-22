<script lang="ts">
	import Seo from '@/src/components/Seo.svelte'
	import Socials from '@/src/components/Socials.svelte'
</script>

<Seo preloads={[{ as: 'image', href: 'https://ik.imagekit.io/vjeqenuhn/static/headshot.jpeg' }]} />

<div class="flex flex-col gap-y-8">
	<div class="flex flex-row items-center gap-x-4">
		<img
			width="32px"
			height="32px"
			class="size-[32px] rounded-full"
			alt="Rishi Raj Jain in his favourite attire"
			src="https://ik.imagekit.io/vjeqenuhn/static/headshot.jpeg?tr=w-30"
		/>
		<h1 class="text-2xl font-semibold">Rishi Raj Jain</h1>
	</div>
	<p class="text-md font-light">
		I am a software engineer and a technical writer. I work at <span class="border-b hover:border-black"><img src="https://ik.imagekit.io/vjeqenuhn/static/polar.png" loading="lazy" decoding="async" class="size-[18px] inline-block mb-1" /> <a target="_blank" href="https://polar.sh">Polar</a></span> leading customer success. Previously, I worked at
		<span class="border-b hover:border-black"><img src="https://neon.com/brand/neon-logomark-light-color.svg" loading="lazy" decoding="async" class="size-[18px] inline-block ml-1 mb-1" /> <a class="text-[#0d564f]" href="https://neon.com">Neon</a></span>
		and <span class="border-b hover:border-black"><img src="https://ik.imagekit.io/vjeqenuhn/static/ls.svg" loading="lazy" decoding="async" class="size-[18px] inline-block mb-1" /> <a class="text-[#5423e7]" href="https://lemonsqueezy.com">Lemon Squeezy</a>,</span>. On the side, I'm developing and marketing <span class="border-b hover:border-black"><img src="https://ik.imagekit.io/vjeqenuhn/launchfast-website/purple-icon.png" loading="lazy" decoding="async" class="size-[18px] inline-block mb-1" /> <a class="text-black" href="https://www.launchfa.st" target="_blank">LaunchFast</a></span> and <span class="block" /><span class="border-b hover:border-black"><img src="https://ik.imagekit.io/vjeqenuhn/JobsFromAnywhere/logo.png" loading="lazy" decoding="async" class="size-[18px] inline-block mb-1" /> <a class="text-black" href="https://jobsfromanywhere.com" target="_blank">JobsFromAnywhere</a></span>, sharing thoughts in a
		<a class="text-[#ff6719]" href="https://rishirajjain.substack.com" target="_blank"><u>newsletter</u></a>
		and growing collection of <a class="text-black" href="/blogs"><u>technical blogs</u></a>.
	</p>
	<Socials />
</div>
