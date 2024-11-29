<script lang="ts">
	import type { PageData } from './$types'
	import Seo from '@/src/components/Seo.svelte'

	export let data: PageData
</script>

<Seo title="Blogs - Rishi Raj Jain" />

<h1 class="text-2xl font-bold sm:text-5xl">Blogs</h1>
<span class="mt-4 text-lg font-light text-slate-600">I've been writing since 13<sup>th</sup> March, 2020 around web development and design ✍🏻</span>
<div class="mt-4 flex flex-row items-start gap-x-3 rounded border px-3 py-5 shadow-md">
	<img loading="lazy" decoding="async" height="40" width="40" alt="Margo McCabe" src="https://ik.imagekit.io/vjeqenuhn/margo" class="size-[40px] rounded-full" />
	<div class="flex flex-col">
		<span class="text-sm">
			We collaborated with Rishi for a few
			<a target="_blank" class="border-b hover:border-black" href="https://www.harperdb.io/author/rishi-raj-jain">tutorials/articles on HarperDB</a>. He was great to work with, set
			clear expectations, and produced the content we were looking for! Great resource for the dev community.
		</span>
		<span class="mt-2 text-xs"> Margo McCabe </span>
		<span class="text-xs"> Head of Partnerships & DevRel </span>
		<span class="text-xs"> HarperDB </span>
	</div>
</div>
<div class="mt-4 flex flex-row items-start gap-x-3 rounded border px-3 py-5 shadow-md">
	<img loading="lazy" decoding="async" height="40" width="40" alt="Enes Akar" src="https://avatars.githubusercontent.com/u/234086" class="size-[40px] rounded-full" />
	<div class="flex flex-col">
		<span class="text-sm">
			I have been working with Rishi for about two years now. He assists us with developer relations and content creation activities. Rishi possesses excellent communication skills and technical understanding. Typically, I briefly explain a project, and he builds it impressively in a short period. I highly recommend him for engineering and software development projects.
		</span>
		<span class="mt-2 text-xs"> Enes Akar </span>
		<span class="text-xs"> CEO </span>
		<span class="text-xs"> Upstash </span>
	</div>
</div>
<div class="mt-4 flex flex-row items-start gap-x-3 rounded border px-3 py-5 shadow-md">
	<img loading="lazy" decoding="async" height="40" width="40" alt="Edouard Bonlieu" src="https://avatars.githubusercontent.com/u/2520463" class="size-[40px] rounded-full" />
	<div class="flex flex-col">
		<span class="text-sm">
			Rishi collaborated with us to create educational and technical articles showcasing the Koyeb serverless GPU offering. He is an exceptional individual, highly responsive, with great technical writing skills, able to tackle a wide range of topics. Working with Rishi was a fantastic experience, and his contributions really helped us scale our content production.
		</span>
		<span class="mt-2 text-xs"> Edouard Bonlieu </span>
		<span class="text-xs"> Co-Founder and CPO </span>
		<span class="text-xs"> Koyeb </span>
	</div>
</div>
<ol class="mt-4 flex w-full list-decimal flex-col">
	{#each data.posts as item}
		<li>
			{#if item.slug}
				<a href={`/blog/${item.slug}`} class="mt-1 hover:underline">
					{item.content.title}
				</a>
			{:else}
				<a rel="noopener" target="_blank" href={item.content.Url.url} class="mt-1 hover:underline">
					{item.content.Title}
				</a>
			{/if}
		</li>
	{/each}
</ol>

<style>
	ol {
		-moz-transform: rotate(180deg);
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
	}
	ol > li {
		-moz-transform: rotate(-180deg);
		-webkit-transform: rotate(-180deg);
		transform: rotate(-180deg);
	}
</style>
