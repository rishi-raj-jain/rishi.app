import { load as loadCheerio } from 'cheerio'
import renderRichText from '@/src/lib/render'
import type { PageServerLoad } from '../$types'
import { getTagline, getTimelineItems } from '@/src/lib/storyblok'

export const load: PageServerLoad = async () => {
	let page = 1
	let Timeline = {}
	let arePosts = true
	let aboutTagline = ''
	while (arePosts) {
		let tempTimeline = (await getTimelineItems(5, page)) || []
		if (tempTimeline.length > 0) {
			tempTimeline.forEach((a) => {
				if (Timeline.hasOwnProperty(a.content.Year)) {
					Timeline[a.content.Year].push(a)
				} else {
					Timeline[a.content.Year] = [a]
				}
			})
			page += 1
		} else {
			arePosts = false
		}
	}
	aboutTagline = await getTagline('about')
	let aboutTaglineHTML = renderRichText.render(aboutTagline)
	const $ = loadCheerio(aboutTaglineHTML)
	$('p').addClass('mt-2 font-light text-slate-600 dark:text-slate-400')
	// @ts-ignore
	aboutTaglineHTML = $('p').parent().html()
	return { aboutTaglineHTML, Timeline }
}
