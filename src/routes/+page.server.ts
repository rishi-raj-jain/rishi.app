import { env } from '$env/dynamic/private'
import { load as loadCheerio } from 'cheerio'
import renderRichText from '@/src/lib/render'
import type { PageServerLoad } from './$types'
import { getTagline } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url, fetch }) => {
	let tagline = await getTagline('home')
	tagline = renderRichText.render(tagline)
	const $ = loadCheerio(tagline)
	$('p').addClass('mt-6 text-lg font-light text-slate-600 dark:text-slate-400')
	// @ts-ignore
	tagline = $('p').parent().html()
	// Use ImageKit transformation to blur the URL and convert the blurred image to a string
	const call = await fetch('https://ik.imagekit.io/vjeqenuhn/static/favicon-image.jpg?tr=bl-50')
	const resp = await call.arrayBuffer()
	let blurImage = Buffer.from(resp).toString('base64')
	blurImage = 'data:image/jpeg;base64,' + blurImage
	return { tagline, domain: env.DOMAIN ?? url.origin, blurImage }
}
