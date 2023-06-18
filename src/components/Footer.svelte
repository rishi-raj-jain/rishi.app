<script>
	import Socials from '@/src/components/Socials.svelte'
</script>

<div class="flex w-full flex-col items-center border-t dark:border-gray-500">
	<div class="grid w-full max-w-[90vw] grid-cols-1 sm:px-10 md:grid-cols-2 lg:max-w-[75vw] lg:grid-cols-3">
		<div class="flex w-full flex-col">
			<img class="mt-6" alt="Rishi's Icon" src="https://ik.imagekit.io/vjeqenuhn/static/icon.png" height="50" width="50" />
			<span class="mt-3 text-xl font-medium dark:text-white"> Rishi Raj Jain </span>
			<span class="mt-3 font-light dark:text-gray-400">All Time Web Enthusiast</span>
		</div>
		<div class="flex w-full flex-col">
			<span class="mt-6 font-normal dark:text-white"> Learn More </span>
			<a class="mt-3 font-light dark:text-gray-400" href="/about">About</a>
			<a class="mt-3 font-light dark:text-gray-400" href="/blogs">Blogs</a>
			<a class="mt-3 font-light dark:text-gray-400" href="/cv">CV</a>
			<a class="mt-3 font-light dark:text-gray-400" href="/storyblok">Storyblok</a>
			<a class="mt-3 font-light dark:text-gray-400" href="/showcase">Showcase</a>
			<a class="mt-3 font-light dark:text-gray-400" href="/videos">Talks</a>
			<a class="mt-3 font-light dark:text-gray-400" href="/sitemap.xml">Sitemap</a>
			<a class="mt-3 font-light dark:text-gray-400" href="/robots.txt">Robots</a>
		</div>
		<div class="flex w-full flex-col">
			<span class="mt-6 font-normal dark:text-white"> Socials </span>
			<div class="mt-3 h-[1px] w-full" />
			<Socials />
		</div>
	</div>
	<div class="mt-6 h-[1px] w-full" />
</div>
