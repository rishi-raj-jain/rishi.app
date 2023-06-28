<script lang="ts">
	import { onDestroy } from 'svelte'
	import { comments } from '@/src/stores'

	onDestroy(() => {
		comments.set(null)
	})
</script>

{#if $comments && Array.isArray($comments) && $comments.length > 0}
	{#each $comments.sort((a, b) => (new Number(a.time) > new Number(b.time) ? -1 : 1)) as item}
		{#if item.loading}
			<div class="mt-5 flex w-full flex-col rounded border p-5 dark:border-gray-500">
				<span class="flex flex-row items-center gap-x-5 text-lg font-medium">
					<span class="w-[50px] animate-pulse bg-gray-100 py-1" />
					<span class="text-gray-500 dark:text-gray-300">&middot;</span>
					<span class="w-[50px] animate-pulse bg-gray-100 py-1" />
				</span>
				<span class="text-md mt-3 h-[20px] w-full animate-pulse bg-gray-100 dark:bg-gray-300" />
			</div>
		{:else}
			<div class="mt-5 flex w-full flex-col rounded border p-5 dark:border-gray-500">
				<span class="text-lg font-medium text-gray-500 dark:text-gray-300">
					{item.name} &middot; {new Date(1000 * item.time).toLocaleDateString()}
				</span>
				<span class="text-md mt-3 text-gray-500 dark:text-gray-300">{item.content}</span>
			</div>
		{/if}
	{/each}
{/if}
