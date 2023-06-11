import { env } from '$env/dynamic/private'
import type { PageServerLoad } from '../$types'
import { getAllPostsForHome, getRecommendedPosts, getTagline } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url }) => {
	const allPosts = await getAllPostsForHome()
	const recommendedPosts = await getRecommendedPosts()
	const blogsTagline = await getTagline('blogs')
	const domain = env.DOMAIN ?? url.origin
	return { allPosts, recommendedPosts, blogsTagline, domain }
}
