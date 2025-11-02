<script lang="ts">
	import type { PageData } from './$types'
	import Seo from '@/src/components/Seo.svelte'

	export let data: PageData
</script>

<Seo title="Blogs - Rishi Raj Jain" />

<h1 class="text-2xl font-bold">Blogs</h1>
<p class="mt-2 font-light">I've been writing since 13<sup>th</sup> March, 2020 around web development and design ✍🏻</p>
<div class="mt-4 flex flex-row items-start gap-x-3 rounded border px-3 py-5 shadow-md">
	<img loading="lazy" decoding="async" height="40" width="40" alt="Enes Akar" src="https://avatars.githubusercontent.com/u/234086" class="size-[40px] rounded-full" />
	<div class="flex flex-col">
		<span class="text-sm font-light">
			I have been working with Rishi for about two years now. He assists us with developer relations and content creation activities. Rishi possesses excellent communication skills
			and technical understanding. Typically, I briefly explain a project, and he builds it impressively in a short period. I highly recommend him for engineering and software
			development projects.
		</span>
		<span class="mt-2 text-slate-600 text-xs"> Enes Akar </span>
		<span class="text-xs text-slate-600"> CEO </span>
		<span class="text-xs text-slate-600"> Upstash </span>
	</div>
</div>
<div class="mt-4 flex flex-row items-start gap-x-3 rounded border px-3 py-5 shadow-md">
	<img loading="lazy" decoding="async" height="40" width="40" alt="Edouard Bonlieu" src="https://avatars.githubusercontent.com/u/2520463" class="size-[40px] rounded-full" />
	<div class="flex flex-col">
		<span class="text-sm font-light">
			Rishi collaborated with us to create educational and technical articles showcasing the Koyeb serverless GPU offering. He is an exceptional individual, highly responsive, with
			great technical writing skills, able to tackle a wide range of topics. Working with Rishi was a fantastic experience, and his contributions really helped us scale our content
			production.
		</span>
		<span class="mt-2 text-slate-600 text-xs"> Edouard Bonlieu </span>
		<span class="text-xs text-slate-600"> Co-Founder and CPO </span>
		<span class="text-xs text-slate-600"> Koyeb </span>
	</div>
</div>
<div class="mt-4 flex flex-row items-start gap-x-3 rounded border px-3 py-5 shadow-md">
	<img loading="lazy" decoding="async" height="40" width="40" alt="Margo McCabe" src="https://ik.imagekit.io/vjeqenuhn/margo" class="size-[40px] rounded-full" />
	<div class="flex flex-col">
		<span class="text-sm font-light">
			We collaborated with Rishi for a few
			<a target="_blank" href="https://www.harperdb.io/author/rishi-raj-jain"><u>tutorials/articles on HarperDB</u></a>. He was great to work with, set
			clear expectations, and produced the content we were looking for! Great resource for the dev community.
		</span>
		<span class="mt-2 text-xs text-slate-600"> Margo McCabe </span>
		<span class="text-xs text-slate-600"> Head of Partnerships & DevRel </span>
		<span class="text-xs text-slate-600"> HarperDB </span>
	</div>
</div>
<ol class="mt-4 flex w-full ml-4 gap-y-1 flex-col text-sm">
	{#each data.posts as item}
		<li class="list-disc text-gray-400 hover:underline">
			{#if item.slug}
				<a href={`/blog/${item.slug}`} class="text-black">
					{item.content.title}
				</a>
			{:else}
				<a rel="noopener" target="_blank" class="text-black" href={item.content.Url.url}>
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
