<script>
	import { storyblok } from './data';
</script>

<div class="flex w-full flex-col items-center text-[14px]">
	<div class="mt-10 flex w-[90vw] max-w-[540px] flex-col">
		<h2 class="text-3xl font-bold text-zinc-700 dark:text-gray-300">Storyblok x Rishi Raj Jain</h2>
		<a href="#About" id="About" class="mt-10 text-zinc-700 dark:text-gray-300">About</a>
		<p class="mt-2 font-light text-slate-600 dark:text-slate-400">
			Rishi is a<a
				target="_blank"
				rel="noreferrer"
				href="https://storyblok.com"
				class="text-black underline dark:text-slate-200"
			>
				Storyblok Ambassador</a
			>, since Sept. 2021.
		</p>
	</div>
	{#each Object.keys(storyblok) as i}
		<div class="mt-10 flex w-[90vw] max-w-[540px] flex-col gap-y-5">
			<a href={`#${i}`} id={i} class="text-zinc-700 dark:text-gray-300">
				{i}
			</a>
			{#if storyblok.hasOwnProperty(i)}
				{#each storyblok[i] as j}
					<div class="flex flex-col gap-y-2 gap-x-10 md:flex-row md:gap-y-0">
						<p class="min-w-[100px] font-light text-gray-400">{j.name}</p>
						<a
							target="_blank"
							rel="noreferrer"
							href={j.href || '#'}
							class="flex flex-row items-center justify-start font-light text-black hover:underline dark:text-slate-200"
						>
							{j.title} &#x2197;
						</a>
					</div>
				{/each}
			{/if}
		</div>
	{/each}
</div>
