<script lang="ts">
	export let j: any
</script>

{#if j && j.href}
	<a target="_blank" rel="noreferrer" href={j.href || '#'} class="flex flex-row items-center justify-start font-light text-black border-b">
		{j.title}
	</a>
{:else}
	<span class="flex flex-row items-center justify-start font-light text-black">
		{j.title}
	</span>
{/if}
