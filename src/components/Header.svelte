<script lang="ts">
	import { page } from '$app/stores'
</script>

<nav class="scrollbar sticky flex flex-row flex-wrap items-center gap-x-4 gap-y-2 bg-white text-sm text-gray-400">
	<a class={`font-light ${$page.url.pathname === '/' && 'border-b text-black'}`} href="/">Home</a>
	<a class={`font-light ${$page.url.pathname.includes('/blog') && 'border-b text-black'}`} href="/blogs">Blogs</a>
	<a class={`font-light ${$page.url.pathname.includes('/cv') && 'border-b text-black'}`} href="/cv">CV</a>
	<a class={`font-light ${$page.url.pathname.includes('/storyblok') && 'border-b text-black'}`} href="/storyblok">Storyblok</a>
	<a class={`font-light ${$page.url.pathname.includes('/showcase') && 'border-b text-black'}`} href="/showcase">Showcase</a>
	<a class={`font-light ${$page.url.pathname.includes('/videos') && 'border-b text-black'}`} href="/videos">Videos</a>
	<a class={`font-light ${$page.url.pathname.includes('/uses') && 'border-b text-black'}`} href="/uses">Uses</a>
</nav>
