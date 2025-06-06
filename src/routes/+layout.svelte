<script lang="ts">
	import { afterNavigate } from '$app/navigation'
	import { navigating } from '$app/stores'
	import '@/src/app.css'
	import Header from '@/src/components/Header.svelte'
	import '@fontsource-variable/inter'

	const attachImgListener = () => {
		document.querySelectorAll('img').forEach((img) => {
			img.addEventListener('click', () => {
				const popover = document.createElement('div')
				popover.classList = 'w-screen h-screen bg-black/50 fixed top-0 left-0 z-[1000] flex flex-col items-center justify-center'
				const enlargedImg = document.createElement('img')
				enlargedImg.src = img.src
				enlargedImg.classList = 'w-[90%] h-[auto] object-contain max-h-[95%] border bg-white/10'
				popover.appendChild(enlargedImg)
				document.body.appendChild(popover)
				popover.addEventListener('click', (e) => {
					if (e.target === popover) document.body.removeChild(popover)
				})
			})
		})
	}

	afterNavigate(() => {
		setTimeout(attachImgListener, 2000)
	})
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
