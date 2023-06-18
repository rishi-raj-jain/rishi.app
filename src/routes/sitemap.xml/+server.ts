import { env } from '$env/dynamic/private'
import { getAllPostsForHome } from '@/src/lib/storyblok'

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const domain = env.DOMAIN ?? url.origin
	const allPosts = (await getAllPostsForHome()) || []
	const postsString = allPosts.map((i) => `<url><loc>${new URL(`/blog/${i.slug}`, domain).toString()}</loc></url>`).join('')
	const pages = [
		'/',
		'/cv/',
		'/about/',
		'/blogs/',
		'/videos/',
		'/showcase/',
		'/storyblok/',
		'/showcase/react-story/',
		'/showcase/aug21-jul22/',
		'/showcase/the-ahuja-lab/',
		'/showcase/garg-property-adviser/'
	]
	const pagesString = pages.map((i) => `<url><loc>${new URL(i, domain).toString()}</loc></url>`).join('')
	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
                <urlset
                    xmlns:xhtml="https://www.w3.org/1999/xhtml"
                    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
                    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
                    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
                    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
                    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
                >
                ${pagesString}
                ${postsString}
            </urlset>`,
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	)
}
