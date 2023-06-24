<script lang="ts">
	import { uses } from './data'
	import Seo from '@/src/components/Seo.svelte'
	import Pointer from '@/src/components/Pointer.svelte'
</script>

<Seo title="Uses - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">Uses</h1>

<a href="#About" class="font-regular text-md mt-8 whitespace-pre-line dark:text-gray-200 sm:text-xl">About</a>
<p class="mt-2 font-light text-slate-600 dark:text-slate-400">Here's what tech I'm currently using for coding, videos, and music.</p>

{#each Object.keys(uses) as i}
	<div class="mt-8 flex flex-col gap-y-4">
		<a href={`#${i}`} id={i} class="font-regular text-md mt-5 whitespace-pre-line dark:text-gray-200 sm:text-xl">
			{i}
		</a>
		{#if uses.hasOwnProperty(i)}
			{#each uses[i] as j}
				<div class="flex flex-row items-center gap-x-2 gap-y-2 md:flex-row md:gap-y-0">
					<p class="mb-0.5 scale-[2] font-light text-gray-400">&middot;</p>
					<Pointer {j} />
				</div>
			{/each}
		{/if}
	</div>
{/each}
