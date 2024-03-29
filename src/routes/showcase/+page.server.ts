import { env } from '$env/dynamic/private'
import type { PageServerLoad } from './$types'
import { getShowcaseItems } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url }) => {
	let page = 1
	let arePosts = true
	let items: any[] = []
	while (arePosts) {
		let temp = (await getShowcaseItems(5, page)) || []
		if (temp.length > 0) {
			temp.forEach((i: any, _: number) => {
				if (i.full_slug) {
					if (!i.full_slug.startsWith('/')) {
						temp[_]['full_slug'] = '/' + i.full_slug
					}
				}
				if (i.content.links && i.content.links.length > 0) {
					temp[_]['content']['link'] = {
						name: i.content.links[0].name,
						href: i.content.links[0].link.url
					}
					delete temp[_]['links']
				}
			})
			items = [...items, ...temp]
			page += 1
		} else {
			arePosts = false
		}
	}
	return { items, domain: env.DOMAIN ?? url.origin }
}
