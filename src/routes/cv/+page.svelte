<script lang="ts">
	import { cv } from './data'
	import Seo from '@/src/components/Seo.svelte'
	import Pointer from '@/src/components/Pointer.svelte'
</script>

<Seo title="CV - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">CV</h1>

{#each Object.keys(cv) as i}
	<div class="flex flex-col gap-y-4">
		<a href={`#${i}`} id={i} class="font-regular text-md mt-5 whitespace-pre-line sm:text-xl">
			{i}
		</a>
		{#if cv.hasOwnProperty(i)}
			{#each cv[i] as j}
				<div class="flex flex-col gap-x-10 gap-y-2 md:flex-row md:gap-y-0">
					<p class="min-w-[125px] font-light text-gray-400">{j.name}</p>
					<Pointer {j} />
				</div>
			{/each}
		{/if}
	</div>
{/each}
