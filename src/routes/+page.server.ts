import type { PageServerLoad } from './$types'
import { getTagline } from '@/src/lib/storyblok'

export const load: PageServerLoad = async () => {
	return {
		streamed: { tagline: getTagline('home') }
	}
}
