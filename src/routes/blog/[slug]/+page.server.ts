import showdown from 'showdown'
import { env } from '$env/dynamic/private'
import type { PageServerLoad } from './$types'
import showdownHighlight from 'showdown-highlight'
import { getOtherBlogs, getPost } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url, params }) => {
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
		slug: params.slug,
		domain: env.DOMAIN ?? url.origin,
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
