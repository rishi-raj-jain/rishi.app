<script lang="ts">
	import '../app.css'
	import { onMount } from 'svelte'
	import { navigating } from '$app/stores'
	import Header from '@/src/components/Header.svelte'

	onMount(() => {
		// Add listener to window.sessionStorage events
		window.themeChangeListener = () => {
			let sessionTheme = window.sessionStorage.getItem('theme')
			if (sessionTheme === 'light') {
				document.documentElement.classList.remove('dark')
			} else {
				document.documentElement.classList.add('dark')
			}
		}
		// Check the theme preferred in the window acc. to the zone
		window.sessionStorage.getItem('theme') || 'light'
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			window.sessionStorage.setItem('theme', 'dark')
		}
		// Set the theme as light / dark
		window.sessionStorage.setItem('theme', 'light')
		window.themeChangeListener()
	})
</script>

<Header />
<main class="flex flex-col items-center text-black dark:text-gray-200">
	<div class="flex w-full max-w-[90vw] flex-col py-10 sm:px-10 lg:max-w-[75vw]">
		{#if $navigating && $navigating.to && $navigating.to.url.pathname === '/about'}
			<h1 class="text-2xl font-bold sm:text-5xl">About Me</h1>
			<div class="mt-5 w-full animate-pulse bg-gray-400 py-3" />
			<h1 class="mt-16 text-2xl font-bold sm:text-5xl">My Timeline</h1>
			{#each new Array(5).fill(0) as item}
				<div class="mt-8 flex flex-col">
					<span class="animate-pulse bg-gray-400 text-lg font-bold text-gray-400">{item}</span>
					{#each new Array(5).fill(0) as exp}
						<div class="relative mt-5 flex flex-row items-start space-x-5">
							<div class="mt-1 h-[12px] w-[12px]">
								<svg width={12} height={12} viewBox="0 0 16 16" fill="currentColor" class="dark:text-gray-400" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
								</svg>
							</div>
							<div class="flex w-full flex-col">
								<span class="text-md w-full animate-pulse bg-gray-400 font-semibold text-gray-400 sm:text-lg">{exp}</span>
								<span class="mt-3 w-full animate-pulse bg-gray-400 py-1 text-gray-400">
									{exp}
								</span>
							</div>
						</div>
					{/each}
				</div>
			{/each}
		{:else if $navigating && $navigating.to && $navigating.to.url.pathname.startsWith('/blogs')}
			<span class="text-red-900">Loading...</span>
		{:else}
			<slot />
		{/if}
	</div>
</main>

<link rel="stylesheet" href="/css/dark.css" />
