import path from 'path'
import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),
		alias: {
			'@/src': path.resolve('./src/')
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				console.log(path, referrer, message)
			},
			handleMissingId: 'ignore'
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config
