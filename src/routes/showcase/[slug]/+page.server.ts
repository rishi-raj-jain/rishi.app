import showdown from 'showdown'
import { env } from '$env/dynamic/private'
import type { PageServerLoad } from './$types'
import showdownHighlight from 'showdown-highlight'
import { getShowcaseItem } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url, params }) => {
	const blog = await getShowcaseItem(params.slug)
	blog['post']['content']['description'] = new showdown.Converter({
		extensions: [
			showdownHighlight({
				pre: true,
				auto_detection: true
			})
		]
	})
		.makeHtml(blog['post']['content']['description'])
		.toString()
		.replace(/\<noscript\>/g, 'noscript')
		.replace(/\<img\>/g, 'img')
	return {
		blog,
		slug: params.slug,
		domain: env.DOMAIN ?? url.origin
	}
}
