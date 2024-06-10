import { env } from '$env/dynamic/private'
import type { PageServerLoad } from '../$types'
import { getAllPostsForHome, getRecommendedPosts } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url }) => {
	const domain = env.DOMAIN ?? url.origin
	const homePosts = await getAllPostsForHome()
	const recommendedPosts = await getRecommendedPosts()
	return { posts: [...recommendedPosts, ...homePosts].sort((a, b) => new Date(a.first_published_at).getTime() < new Date(b.first_published_at).getTime() ? 1 : -1), domain }
}
