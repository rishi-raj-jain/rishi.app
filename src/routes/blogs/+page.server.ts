import { env } from '$env/dynamic/private'
import { load as loadCheerio } from 'cheerio'
import renderRichText from '@/src/lib/render'
import type { PageServerLoad } from '../$types'
import { getAllPostsForHome, getRecommendedPosts, getTagline } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url }) => {
	const allPosts = await getAllPostsForHome()
	const recommendedPosts = await getRecommendedPosts()
	let tagline = await getTagline('blogs')
	tagline = renderRichText.render(tagline)
	const $ = loadCheerio(tagline)
	$('p').addClass('mt-2 font-light text-slate-600')
	// @ts-ignore
	tagline = $('p').parent().html()
	const domain = env.DOMAIN ?? url.origin
	return { allPosts, recommendedPosts, tagline, domain }
}
