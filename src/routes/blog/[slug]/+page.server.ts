import showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'
import type { PageServerLoad } from '../../$types'
import { getOtherBlogs, getPost } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ params }) => {
	let blog: any
	// @ts-ignore
	const slug = params.slug
	try {
		blog = await getPost(slug)
		blog['post']['content']['long_text'] = new showdown.Converter({
			extensions: [
				showdownHighlight({
					pre: true,
					auto_detection: true
				})
			]
		})
			.makeHtml(blog['post']['content']['long_text'])
			.toString()
			.replace(/\<noscript\>/g, 'noscript')
			.replace(/\<img\>/g, 'img')
	} catch (e) {
		// @ts-ignore
		console.log(e.message || e.toString())
	}
	return {
		blog,
		slug,
		streamed: {
			morePosts: new Promise(async (resolve, reject) => {
				let morePosts: any[] = []
				const appendFirst = (item: any[]) => (item.length ? morePosts.push(item[0]) : null)
				appendFirst(await getOtherBlogs(blog.post.first_published_at, blog.post.full_slug, 1, true))
				appendFirst(await getOtherBlogs(blog.post.first_published_at, blog.post.full_slug, 1, false))
				resolve(morePosts)
			})
		}
	}
}
