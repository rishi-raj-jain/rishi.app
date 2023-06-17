import { env } from '$env/dynamic/private'
import type { PageServerLoad } from './$types'
import { getTagline } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url, fetch }) => {
	const tagline = await getTagline('home')
	// Use ImageKit transformation to blur the URL and convert the blurred image to a string
	const call = await fetch('https://ik.imagekit.io/vjeqenuhn/static/favicon-image.jpg?tr=bl-50')
	const resp = await call.arrayBuffer()
	let blurImage = Buffer.from(resp).toString('base64')
	blurImage = 'data:image/jpeg;base64,' + blurImage
	return { tagline, domain: env.DOMAIN ?? url.origin, blurImage }
}
