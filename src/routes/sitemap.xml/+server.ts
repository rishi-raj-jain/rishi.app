import { env } from '$env/dynamic/private'
import { getAllPostsForHome } from '@/src/lib/storyblok'

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const allPosts = (await getAllPostsForHome()) || []
	const domain = env.DOMAIN ?? url.origin
	const pages = ['/', '/about/', '/cv/', '/storyblok/', '/blogs/', '/videos/', '/showcase/']
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
                ${pages
									.map(
										(i) => `
                    <url>
                        <loc>
                            ${new URL(i, domain).toString()}
                        </loc>
                    </url>
                `
									)
									.join('')}
                ${allPosts
									.map(
										(i) => `
                <url>
                    <loc>
                        ${new URL(`/blog/${i.slug}`, domain).toString()}
                    </loc>
                </url>
                `
									)
									.join('')}
            </urlset>`,
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	)
}
