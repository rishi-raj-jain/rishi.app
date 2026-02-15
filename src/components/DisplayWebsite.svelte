<script lang="ts">
	import Seo from '@/src/components/Seo.svelte'

	export let urls: { url: string; slug: string }[]
</script>

<Seo title="wellOwise - Websites - Rishi Raj Jain" />

{#each urls as one}
	<span class="text-md text-gray-400">{one.slug}</span>
	<div class="mt-2 h-px bg-white" />
	<iframe src={`${one.url}/preview`} height="700" class="w-full py-4 bg-black rounded" />
	<div class="mt-8 h-px bg-white" />
{/each}
