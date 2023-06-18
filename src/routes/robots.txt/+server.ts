export async function GET() {
	return new Response(`User-agent: *\nDisallow:\n\nSitemap: https://rishi.app/sitemap.xml`, {
		headers: {
			'Content-Type': 'text/plain'
		}
	})
}
