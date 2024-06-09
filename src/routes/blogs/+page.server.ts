import { env } from '$env/dynamic/private'
import type { PageServerLoad } from '../$types'
import { getRecommendedPosts } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url }) => {
	const recommendedPosts = await getRecommendedPosts()
	const domain = env.DOMAIN ?? url.origin
	return { recommendedPosts, domain }
}
