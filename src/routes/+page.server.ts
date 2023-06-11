import type { PageServerLoad } from './$types'
import { getTagline } from '@/src/lib/storyblok'

export const load: PageServerLoad = async () => {
	const tagline = await getTagline('home')
	return { tagline }
}
