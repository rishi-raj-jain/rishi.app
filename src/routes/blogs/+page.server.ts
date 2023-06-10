import type { PageServerLoad } from '../$types'
import { getAllPostsForHome, getRecommendedPosts, getTagline } from '@/src/lib/storyblok'

export const load: PageServerLoad = async () => {
	let data = undefined
	try {
		const allPosts = (await getAllPostsForHome()) || new Array(5).fill(0).map((i, _) => _)
		const recommendedPosts = (await getRecommendedPosts()) || new Array(5).fill(0).map((i, _) => _)
		const blogsTagline = await getTagline('blogs')
		data = { allPosts, recommendedPosts, blogsTagline }
	} catch (e) {
		console.log(e)
	}
	return data
}
