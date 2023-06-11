import type { PageServerLoad } from '../$types'
import { getAllPostsForHome, getRecommendedPosts, getTagline } from '@/src/lib/storyblok'

export const load: PageServerLoad = async () => {
	const allPosts = await getAllPostsForHome()
	const recommendedPosts = await getRecommendedPosts()
	const blogsTagline = await getTagline('blogs')
	return { allPosts, recommendedPosts, blogsTagline }
}
