<script lang="ts">
	import '../app.css'
	import { onMount } from 'svelte'
	import Header from '@/src/components/Header.svelte'
	import { themeChangeListener } from '@/src/lib/theme'

	onMount(() => {
		// Check the theme preferred in the window acc. to the zone
		window.sessionStorage.getItem('theme') || 'light'
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			window.sessionStorage.setItem('theme', 'dark')
		}
		// Set the theme as light / dark
		window.sessionStorage.setItem('theme', 'light')
		themeChangeListener()
	})
</script>

<Header />
<main class="flex flex-col items-center text-black dark:text-gray-200">
	<div class="flex w-full max-w-[90vw] flex-col py-10 sm:px-10 lg:max-w-[75vw]">
		<slot />
	</div>
</main>

<link rel="stylesheet" href="/css/dark.css" />
