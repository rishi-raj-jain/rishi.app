<script lang="ts">
	import { page } from '$app/stores'
</script>

<nav class="scrollbar sticky flex flex-row items-center space-x-5 overflow-x-scroll bg-white">
	<a class={`font-light ${$page.url.pathname === '/' && 'border-b'}`} href="/">Home</a>
	<a class={`font-light ${$page.url.pathname.includes('/blog') && 'border-b'}`} href="/blogs">Blogs</a>
	<a class={`font-light ${$page.url.pathname.includes('/cv') && 'border-b'}`} href="/cv">CV</a>
	<a class={`font-light ${$page.url.pathname.includes('/storyblok') && 'border-b'}`} href="/storyblok">Storyblok</a>
	<a class={`font-light ${$page.url.pathname.includes('/showcase') && 'border-b'}`} href="/showcase">Showcase</a>
	<a class={`font-light ${$page.url.pathname.includes('/videos') && 'border-b'}`} href="/videos">Videos</a>
	<a class={`font-light ${$page.url.pathname.includes('/uses') && 'border-b'}`} href="/uses">Uses</a>
</nav>
