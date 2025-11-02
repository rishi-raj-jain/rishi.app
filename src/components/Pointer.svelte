<script lang="ts">
	export let j: any
</script>

{#if j && j.href}
	<a target="_blank" rel="noreferrer" href={j.href || '#'} class="flex flex-row items-center justify-start border-b font-light">
		{j.title}
	</a>
{:else}
	<span class="flex flex-row items-center justify-start font-light">
		{j.title}
	</span>
{/if}
