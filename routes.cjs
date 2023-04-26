import { Router } from '@edgio/core/router'

const router = new Router()

router.static('.vercel/output/static')

const paths = ['/', '/about', '/cv', '/storyblok', '/blogs']

paths.forEach((i) => {
	router.match(i, ({ renderWithApp, removeUpstreamResponseHeader, cache }) => {
		removeUpstreamResponseHeader('cache-control')
		cache({
			browser: false,
			edge: {
				maxAgeSeconds: 60,
				staleWhileRevalidateSeconds: 60 * 60 * 24 * 365
			}
		})
		renderWithApp()
	})
	router.match(`${i === '/' ? '' : i}/__data.json`, ({ renderWithApp, removeUpstreamResponseHeader, cache }) => {
		removeUpstreamResponseHeader('cache-control')
		cache({
			browser: false,
			edge: {
				maxAgeSeconds: 60,
				staleWhileRevalidateSeconds: 60 * 60 * 24 * 365
			}
		})
		renderWithApp()
	})
})

router.fallback(({ renderWithApp, removeUpstreamResponseHeader, cache }) => {
	removeUpstreamResponseHeader('cache-control')
	cache({
		edge: false,
		browser: false
	})
	renderWithApp()
})

export default router
