import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
import { neon } from '@neondatabase/serverless'

const sql = neon(env.DATABASE_URL!)

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const slug = url.searchParams.get('slug')
	const posts = await sql`SELECT * FROM comments WHERE slug = ${slug}`
	return json(posts)
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { name, slug, email, content } = await request.json()
	await sql`INSERT INTO comments (name, slug, email, content, time) VALUES (${name}, ${slug}, ${email}, ${content}, ${new Date().toString()})`
}
