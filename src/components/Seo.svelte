<script lang="ts">
	import { page } from '$app/stores'

	export let title: string = 'Rishi Raj Jain - Software Engineer, Developer, Designer, Writer',
		description: string = 'Currently, I am working as a Technical Customer Success Manager at Edgio.',
		domain: string = 'https://sveltekit.rishi.app',
		image: string = '/static/social-media-card.jpg',
		pathname: string = $page.url.pathname
</script>

<svelte:head>
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
	<meta property="og:description" content={description} />
	<meta property="og:image" content={domain + image} />
	<meta property="og:url" content={domain + pathname} />
	<!-- Twitter -->
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:image" content={domain + image} />
	<meta property="twitter:url" content={domain + pathname} />
</svelte:head>
