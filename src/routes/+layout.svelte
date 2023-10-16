<script lang="ts">
	import '@/src/app.css'
	import { onMount } from 'svelte'
	import { navigating } from '$app/stores'
	import Footer from '@/src/components/Footer.svelte'
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

<svelte:head>
	<link rel="icon" href="https://ik.imagekit.io/vjeqenuhn/static/icon.png" />
</svelte:head>

<a href="https://launchfa.st#demo" class="flex flex-row items-center justify-center gap-x-3 border-b bg-purple-800/10 py-1 shadow-2xl">
	<img loading="lazy" alt="LaunchFast Logo" height="20" width="20" src="https://www.launchfa.st/purple-icon.png" />
	<span class="md:hidden">Introducing LaunchFa.st - Astro boilerplate</span>
	<span class="hidden md:block">Introducing LaunchFa.st - Astro boilerplate to launch your SaaS in a day</span>
	<button class="hidden rounded border border-purple-800 px-3 py-1 text-sm transition duration-300 hover:scale-105 md:block">Checkout Now &rarr;</button>
</a>

<Header />

<main class="flex flex-col items-center text-black dark:text-gray-200">
	<div class="flex w-full max-w-[90vw] flex-col py-10 sm:px-10 lg:max-w-[75vw]">
		{#if $navigating && $navigating.to}
			<div class="flex min-h-[90vh] w-full flex-col items-center justify-center">
				<img class="animate-pulse" alt="Rishi's Icon" src="https://ik.imagekit.io/vjeqenuhn/static/icon.png" height="50" width="50" />
			</div>
		{:else}
			<slot />
		{/if}
	</div>
</main>

<Footer />

<link rel="stylesheet" href="/css/dark.css" />
