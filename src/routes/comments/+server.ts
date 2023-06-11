import { env } from '$env/dynamic/private'

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const upstream = new URL(env.COMMENTS_URL)
	upstream.searchParams.set('token', env.COMMENTS_TOKEN)
	upstream.searchParams.set('slug', url.searchParams.get('slug'))
	const res = await fetch(upstream.toString())
	const { posts } = await res.json()
	return new Response(JSON.stringify(posts), {
		headers: {
			'Content-Type': 'application/json'
		}
	})
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const upstream = new URL(env.COMMENTS_URL)
	upstream.searchParams.set('token', env.COMMENTS_TOKEN)
	const body = await request.json()
	await fetch(upstream.toString(), {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	new Response(null, {
		status: 200
	})
}
