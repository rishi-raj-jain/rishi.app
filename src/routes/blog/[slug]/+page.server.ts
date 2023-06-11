import showdown from 'showdown'
import type { RouteParams } from './$types'
import showdownHighlight from 'showdown-highlight'
import { getOtherBlogs, getPost } from '@/src/lib/storyblok'

export const load = async ({ params }: { params: RouteParams }) => {
	const blog = await getPost(params.slug)
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
	return {
		blog,
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
