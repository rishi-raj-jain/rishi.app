<script lang="ts">
	export let j: any
</script>

{#if j && j.href}
	<a target="_blank" rel="noreferrer" href={j.href || '#'} class="flex flex-row items-center justify-start font-light text-black hover:underline dark:text-slate-200">
		{j.title} &#x2197;
	</a>
{:else}
	<span class="flex flex-row items-center justify-start font-light text-black dark:text-slate-200">
		{j.title}
	</span>
{/if}
