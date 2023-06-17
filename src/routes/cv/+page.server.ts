import { env } from '$env/dynamic/private'
import { load as loadCheerio } from 'cheerio'
import renderRichText from '@/src/lib/render'
import type { PageServerLoad } from './$types'
import { getTagline } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url }) => {
	let tagline = await getTagline('cv')
	tagline = renderRichText.render(tagline)
	const $ = loadCheerio(tagline)
	$('p').addClass('mt-2 font-light text-slate-600 dark:text-slate-400')
	// @ts-ignore
	tagline = $('p').parent().html()
	return { domain: env.DOMAIN ?? url.origin, tagline }
}
