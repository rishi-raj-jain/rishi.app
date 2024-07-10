import { env } from '$env/dynamic/private'
import type { PageServerLoad } from '../$types'
import { getAllPostsForHome, getRecommendedPosts } from '@/src/lib/storyblok'

const getAllRecommendedPosts = async () => {
	let page = 1
	let arePosts = true
	let allPosts: any[] = []
	while (arePosts) {
		let tempTimeline = (await getRecommendedPosts(100, page)) || []
		if (tempTimeline.length > 0) {
			allPosts = [...allPosts, ...tempTimeline]
			page += 1
		} else {
			arePosts = false
		}
	}
	return allPosts
}

export const load: PageServerLoad = async ({ url }) => {
	const domain = env.DOMAIN ?? url.origin
	const allPosts = await Promise.all([getAllPostsForHome(), getAllRecommendedPosts()])
	const posts = allPosts.flat().sort((a, b) => (new Date(a.first_published_at).getTime() > new Date(b.first_published_at).getTime() ? 1 : -1))
	return { posts, domain }
}
