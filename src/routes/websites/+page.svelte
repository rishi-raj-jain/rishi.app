<script lang="ts">
	import { websites, getAllTechnologies } from './data'
	import Seo from '@/src/components/Seo.svelte'

	let selectedTech: string | null = null

	$: allTechnologies = getAllTechnologies()
	$: filteredWebsites = selectedTech ? websites.filter((w) => w.techStack.some((t) => t.name === selectedTech)) : websites

	function toggleFilter(techName: string) {
		selectedTech = selectedTech === techName ? null : techName
	}
</script>

<Seo title="Websites - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-4xl">Websites</h1>

<p class="mt-2 font-light text-slate-600">A collection of websites I've coded and launched.</p>

<!-- Tech Filter Section -->
<div class="mt-6 flex flex-col gap-y-3">
	<h2 class="text-sm font-medium text-gray-700">Filter by Technology</h2>
	<div class="flex flex-wrap gap-2">
		{#each allTechnologies as tech}
			<button
				on:click={() => toggleFilter(tech.name)}
				class={`flex items-center gap-x-2 rounded-full border px-3 py-1.5 text-sm transition-all ${
					selectedTech === tech.name ? 'border-black bg-black text-white' : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
				}`}
			>
				<img src={`https://cdn.simpleicons.org/${tech.logo}/${selectedTech === tech.name ? 'ffffff' : tech.color?.replace('#', '')}`} alt={tech.name} class="h-4 w-4" />
				<span>{tech.name}</span>
			</button>
		{/each}
		{#if selectedTech}
			<button on:click={() => (selectedTech = null)} class="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 hover:border-gray-400">
				Clear filter
			</button>
		{/if}
	</div>
</div>

<!-- Websites Grid -->
<div class="mt-8 flex flex-col gap-y-6">
	{#each filteredWebsites as website}
		<div class="flex flex-col gap-y-3 border-b border-gray-200 pb-6">
			<!-- Website Header with Favicon -->
			<div class="flex items-start gap-x-3">
				<img src={website.symbol} class="mt-1 h-8 w-8 rounded" alt={`${website.title} favicon`} />
				<div class="flex flex-1 flex-col gap-y-1">
					<a href={website.href} target="_blank" rel="noopener noreferrer" class="group flex flex-row items-center gap-x-2 text-xl font-medium hover:underline">
						{website.title}
					</a>
					{#if website.description}
						<p class="text-sm font-light text-gray-600">{website.description}</p>
					{/if}
					<a href={website.href} target="_blank" rel="noopener noreferrer" class="text-xs text-gray-400 hover:text-black">
						{website.href}
					</a>
				</div>
			</div>

			<!-- Tech Stack -->
			<div class="flex flex-col gap-y-2">
				<span class="text-xs font-medium text-gray-500">Tech Stack</span>
				<div class="flex flex-wrap gap-2">
					{#each website.techStack as tech}
						<button
							on:click={() => toggleFilter(tech.name)}
							class="group flex items-center gap-x-1.5 rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs transition-all hover:border-gray-300 hover:bg-white"
							title={`Filter by ${tech.name}`}
						>
							<img src={`https://cdn.simpleicons.org/${tech.logo}/${tech.color?.replace('#', '')}`} alt={tech.name} class="h-3.5 w-3.5" />
							<span class="text-gray-700">{tech.name}</span>
						</button>
					{/each}
				</div>
			</div>
		</div>
	{/each}

	{#if filteredWebsites.length === 0}
		<div class="flex flex-col items-center justify-center py-12 text-center">
			<p class="text-gray-500">No websites found with the selected technology.</p>
			<button on:click={() => (selectedTech = null)} class="mt-4 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:border-gray-400">
				Clear filter
			</button>
		</div>
	{/if}
</div>
