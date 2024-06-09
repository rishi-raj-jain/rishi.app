import { env } from '$env/dynamic/private'
import { load as loadCheerio } from 'cheerio'
import renderRichText from '@/src/lib/render'
import type { PageServerLoad } from './$types'
import { getTagline } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url }) => {
	let tagline = await getTagline('storyblok')
	tagline = renderRichText.render(tagline)
	const $ = loadCheerio(tagline)
	$('p').addClass('mt-2 font-light text-slate-600')
	// @ts-ignore
	tagline = $('p').parent().html()
	return { domain: env.DOMAIN ?? url.origin, tagline }
}
