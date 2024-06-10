import { env } from '$env/dynamic/private'
import type { PageServerLoad } from '../$types'
import { getAllPostsForHome, getRecommendedPosts } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url }) => {
	const domain = env.DOMAIN ?? url.origin
	const allPosts = await Promise.all([getAllPostsForHome(), getRecommendedPosts()])
	const posts = allPosts.flat().sort((a, b) => (new Date(a.first_published_at).getTime() < new Date(b.first_published_at).getTime() ? 1 : -1))
	return { posts, domain }
}
