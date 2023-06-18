import { env } from '$env/dynamic/private'
import type { PageServerLoad } from './$types'
import { getVideoItems } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url }) => {
	let page = 1
	let areVideos = true
	let videos: any[] = []
	while (areVideos) {
		let temp = (await getVideoItems(5, page)) || []
		if (temp.length > 0) {
			temp.forEach((a: any) => {
				videos.push(a)
			})
			page += 1
		} else {
			areVideos = false
		}
	}
	return { domain: env.DOMAIN ?? url.origin, videos }
}
