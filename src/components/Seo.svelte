<script lang="ts">
	import { page } from '$app/stores'

	export let title: string = 'Rishi Raj Jain - Software Engineer, Developer, Designer, Writer',
		description: string = 'Currently, I am looking for a full time role (was last seen as Technical Support Engineer at Lemon Squeezy).',
		domain: string = $page.data?.domain ?? 'https://sveltekit.rishi.app',
		image: string = 'https://ik.imagekit.io/vjeqenuhn/static/social-media-card.jpg?updatedAt=1686855754988',
		pathname: string = $page.url.pathname,
		preloads: any[] = []

	let seoImage = ''

	function updateSEOImage(src: string) {
		if (!src || src.length < 1) {
			seoImage = 'https://ik.imagekit.io/vjeqenuhn/static/social-media-card.jpg?updatedAt=1686855754988'
			return
		}
		const temp = src.replace('https://', '//').replace('//', 'https://')
		if (temp.startsWith('https')) {
			seoImage = temp
			return
		} else {
			seoImage = domain + temp
			return
		}
	}

	$: updateSEOImage(image)
</script>

<svelte:head>
	{#each preloads as preload}
		<link rel="preload" href={preload.href} as={preload.as} />
	{/each}
	<!-- Global Metadata -->
	<meta charset="utf-8" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<!-- Open Graph / Facebook -->
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={seoImage} />
	<meta property="og:url" content={domain + pathname} />
	<meta property="og:description" content={description} />
	<!-- Twitter -->
	<meta property="twitter:title" content={title} />
	<meta property="twitter:image" content={seoImage} />
	<meta property="twitter:url" content={domain + pathname} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:card" content="summary_large_image" />
</svelte:head>
