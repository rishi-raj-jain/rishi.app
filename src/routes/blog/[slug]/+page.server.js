import prism from 'remark-prism'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { getOtherBlogs, getPost } from '../../api'

async function markdownToHtml(markdown) {
	const result = await unified().use(remarkParse).use(prism).use(remarkRehype).use(rehypeStringify).process(markdown)
	return result.toString()
}

export async function load({ params }) {
	const slug = params.slug
	let data
	let morePosts = []
	try {
		data = await getPost(slug)
		data['post']['content']['long_text'] = await markdownToHtml(data['post']['content']['long_text'])
		const appendFirst = (item) => (item.length ? morePosts.push(item[0]) : null)
		appendFirst(await getOtherBlogs(data.post.first_published_at, data.post.full_slug, 1, true))
		appendFirst(await getOtherBlogs(data.post.first_published_at, data.post.full_slug, 1, false))
		data['seo_slug'] = slug
	} catch (e) {
		console.log(e)
	}
	return data
}
