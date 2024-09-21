<script lang="ts">
	import '@/src/app.css'
	import '@fontsource-variable/inter'
	import { navigating } from '$app/stores'
	import Header from '@/src/components/Header.svelte'
</script>

<svelte:head>
	<link rel="icon" href="https://ik.imagekit.io/vjeqenuhn/static/icon.png" />
</svelte:head>

<div class="flex w-full max-w-3xl flex-col p-12">
	<Header />
	<div class="mt-8" />
	{#if $navigating && $navigating.to}
		<div class="flex min-h-[90vh] w-full flex-col items-center justify-center">
			<img class="animate-pulse" alt="Rishi's Icon" src="https://ik.imagekit.io/vjeqenuhn/static/icon.png" height="50" width="50" />
		</div>
	{:else}
		<slot />
	{/if}
</div>
