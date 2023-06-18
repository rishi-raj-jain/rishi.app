<script lang="ts">
	import '@/src/app.css'
	import { onMount } from 'svelte'
	import { navigating } from '$app/stores'
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

<Header />

<main class="flex flex-col items-center text-black dark:text-gray-200">
	<div class="flex w-full max-w-[90vw] flex-col py-10 sm:px-10 lg:max-w-[75vw]">
		{#if $navigating && $navigating.to}
			<div class="flex min-h-[80vh] w-full flex-col items-center justify-center">
				<span class="animate-pulse text-4xl font-black">R</span>
			</div>
		{:else}
			<slot />
		{/if}
	</div>
</main>

<link rel="stylesheet" href="/css/dark.css" />
