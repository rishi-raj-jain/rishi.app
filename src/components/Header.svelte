<script lang="ts">
	import { page } from '$app/stores'
</script>

<nav class="py-8 sticky flex flex-row items-center space-x-5 bg-white overflow-x-scroll">
	<a class={`font-light ${$page.url.pathname === '/' && 'border-b'}`} href="/">Home</a>
	<a class={`font-light ${$page.url.pathname.includes('/blog') && 'border-b'}`} href="/blogs">Blogs</a>
	<a class={`font-light ${$page.url.pathname.includes('/cv') && 'border-b'}`} href="/cv">CV</a>
	<a class={`font-light ${$page.url.pathname.includes('/storyblok') && 'border-b'}`} href="/storyblok">Storyblok</a>
	<a class={`font-light ${$page.url.pathname.includes('/showcase') && 'border-b'}`} href="/showcase">Showcase</a>
	<a class={`font-light ${$page.url.pathname.includes('/videos') && 'border-b'}`} href="/videos">Talks</a>
	<a class={`font-light ${$page.url.pathname.includes('/uses') && 'border-b'}`} href="/uses">Uses</a>
</nav>
