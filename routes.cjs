import { Router } from '@edgio/core/router'

const router = new Router()

router.static('.vercel/output/static')

const paths = ['/', '/about', '/storyblok', '/cv', '/blogs', '/blog/:path']

paths.forEach((i) => {
	router.match(i, ({ renderWithApp, removeUpstreamResponseHeader, cache }) => {
		removeUpstreamResponseHeader('cache-control')
		cache({
			edge: {
				maxAgeSeconds: 60,
				staleWhileRevalidateSeconds: 60 * 60 * 24 * 365
			},
			browser: false
		})
		renderWithApp()
	})
	router.match(`${i === '/' ? '' : i}/__data.json`, ({ renderWithApp, removeUpstreamResponseHeader, cache }) => {
		removeUpstreamResponseHeader('cache-control')
		cache({
			edge: {
				maxAgeSeconds: 60,
				staleWhileRevalidateSeconds: 60 * 60 * 24 * 365
			},
			browser: false
		})
		renderWithApp()
	})
})

router.fallback(({ renderWithApp, removeUpstreamResponseHeader, cache }) => {
	removeUpstreamResponseHeader('cache-control')
	cache({
		browser: false
	})
	renderWithApp()
})

export default router
