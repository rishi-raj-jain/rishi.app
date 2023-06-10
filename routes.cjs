import { CustomCacheKey, Router } from '@edgio/core'

export default new Router()
	.match('/fonts/:path*', ({ cache, proxy }) => {
		cache({
			edge: {
				forcePrivateCaching: true,
				maxAgeSeconds: 60 * 60 * 24 * 365
			},
			key: new CustomCacheKey().excludeAllQueryParameters()
		})
		proxy('web')
	})
	.match('/css/:path*', ({ cache, proxy }) => {
		cache({
			edge: {
				forcePrivateCaching: true,
				maxAgeSeconds: 60 * 60 * 24 * 365
			},
			key: new CustomCacheKey().excludeAllQueryParameters()
		})
		proxy('web')
	})
	.match('/static/:path*', ({ cache, proxy }) => {
		cache({
			edge: {
				forcePrivateCaching: true,
				maxAgeSeconds: 60 * 60 * 24 * 365
			},
			key: new CustomCacheKey().excludeAllQueryParameters()
		})
		proxy('web')
	})
	.match('/_app/:path*', ({ cache, proxy }) => {
		cache({
			edge: {
				forcePrivateCaching: true,
				maxAgeSeconds: 60 * 60 * 24 * 365
			},
			key: new CustomCacheKey().excludeAllQueryParameters()
		})
		proxy('web')
	})
	.match('/__data.json', ({ cache, proxy }) => {
		cache({
			edge: {
				maxAgeSeconds: 60,
				forcePrivateCaching: true,
				staleWhileRevalidateSeconds: 60 * 60 * 24 * 365
			},
			key: new CustomCacheKey().excludeQueryParameters('x-sveltekit-invalidated')
		})
		proxy('web')
	})
	.match('/:path*/__data.json', ({ cache, proxy }) => {
		cache({
			edge: {
				maxAgeSeconds: 60,
				forcePrivateCaching: true,
				staleWhileRevalidateSeconds: 60 * 60 * 24 * 365
			},
			key: new CustomCacheKey().excludeQueryParameters('x-sveltekit-invalidated')
		})
		proxy('web')
	})
	.fallback(({ proxy, cache }) => {
		cache({
			edge: false,
			browser: false
		})
		proxy('web')
	})
