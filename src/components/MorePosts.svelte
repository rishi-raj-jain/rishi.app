<script lang="ts">
	export let posts: any
</script>

<div class="flex flex-col">
	<div class="mb-5 mt-10 text-sm">
		<span> More Posts &rarr; </span>
	</div>
	{#each posts as item}
		<a href={`/blog/${item.slug}`} class="mb-5 block w-full text-lg font-bold hover:underline">
			{item.name}
		</a>
	{/each}
</div>
