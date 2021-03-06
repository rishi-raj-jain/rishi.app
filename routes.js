const { nextRoutes } = require('@layer0/next')
const { Router } = require('@layer0/core/router')
const { foreverEdge, assetCache, nextCache } = require('./cache.js')

// Create a new router
const router = new Router()

// Block crawlers on Layer0 permalinks
router.get(
  {
    headers: {
      host: /layer0.link|layer0-perma.link/,
    },
  },
  ({ setResponseHeader }) => {
    setResponseHeader('x-robots-tag', 'noindex')
  }
)

// Serve service worker
router.get('/service-worker.js', ({ serviceWorker }) => {
  return serviceWorker('.next/static/service-worker.js')
})

// Cache assets
router.get('/static/:file', ({ cache, serveStatic }) => {
  cache(assetCache)
  serveStatic('public/static/:file')
})
router.match('/fonts/:file', ({ cache, serveStatic }) => {
  cache(assetCache)
  serveStatic('public/fonts/:file')
})
router.match('/css/:file', ({ cache, serveStatic }) => {
  cache(assetCache)
  serveStatic('public/css/:file')
})

// Disable cross origin fetch of /api route
router.match('/api/:path*', ({ setResponseHeader }) => {
  setResponseHeader('Access-Control-Allow-Origin', 'https://rishi.app')
})

// Caching the Next.js optimized images forever
router.match('/_next/image/:path*', ({ cache, removeUpstreamResponseHeader }) => {
  removeUpstreamResponseHeader('set-cookie')
  cache(foreverEdge)
})

// Caching the Next.js data props
router.match('/_next/data/:build/blog/:name.json', ({ cache, removeUpstreamResponseHeader }) => {
  removeUpstreamResponseHeader('cache-control')
  cache(nextCache)
})
router.match('/_next/data/:build/:name.json', ({ cache, removeUpstreamResponseHeader }) => {
  removeUpstreamResponseHeader('cache-control')
  cache(nextCache)
})

// Cache the pages for a minute
const pages = ['/', '/about', '/blogs', '/videos', '/cv', '/storyblok', '/blog/:path*']
pages.forEach((i) => {
  router.match(i, ({ cache, removeUpstreamResponseHeader }) => {
    removeUpstreamResponseHeader('cache-control')
    cache(nextCache)
  })
})

// Default Next.js Routes
router.use(nextRoutes)

module.exports = router
