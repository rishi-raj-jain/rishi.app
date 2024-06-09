<script lang="ts">
	import '@/src/app.css'
	import { navigating } from '$app/stores'
	import Header from '@/src/components/Header.svelte'
</script>

<svelte:head>
	<link rel="icon" href="https://ik.imagekit.io/vjeqenuhn/static/icon.png" />
</svelte:head>

<Header />

<main class="flex flex-col items-center text-black">
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
