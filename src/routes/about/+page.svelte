<script>
	export let data

	import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.cjs'
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<h1 class="text-2xl font-bold sm:text-5xl">About Me</h1>
<h2 class="font-regular text-md mt-5 whitespace-pre-line dark:text-gray-400 sm:text-xl">
	{@html new RichTextResolver().render(data.aboutTagline)}
</h2>
<h1 class="mt-16 text-2xl font-bold sm:text-5xl">My Timeline</h1>
{#each Object.keys(data.Timeline).sort((a, b) => (a > b ? -1 : 1)) as item}
	<div class="mt-8 flex flex-col">
		<span class="text-lg font-bold">{item}</span>
		{#each data.Timeline[item] as exp}
			<div class="relative mt-5 flex flex-row items-start space-x-5">
				<div class="mt-1 h-[12px] w-[12px]">
					<svg width={12} height={12} viewBox="0 0 16 16" fill="currentColor" class="dark:text-gray-400" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
					</svg>
				</div>
				<div class="flex flex-col">
					<span class="text-md font-semibold sm:text-lg">{exp.content.Title}</span>
					<span class="dark:text-gray-400">
						{@html new RichTextResolver().render(exp.content.Description)}
					</span>
				</div>
			</div>
		{/each}
	</div>
{/each}
