const url = require('url')
const { join } = require('path')
const { readFileSync } = require('fs')
const { createServer } = require('http')

module.exports = async (port) => {
	createServer(async (request, response) => {
		try {
			const paths = JSON.parse(readFileSync(join(process.cwd(), 'config.json'), 'utf8'))
			const funcName = paths.routes.filter((i) => i.src).find((i) => i.src && url.parse(request.url).pathname.match(i.src)).dest
			const appFilePath = join(process.cwd(), `dist${funcName}.func`, '.svelte-kit', 'vercel-tmp', 'index.js')
			const funcHandler = await (await import(appFilePath)).default
			await funcHandler(request, response)
		} catch (e) {
			console.log(e.message || e.toString())
			// We are emulating the XBP behavior on uncaught exceptions within user project code.
			response.writeHead(534, 'Project Unexpected Error')
		}
	}).listen(port)
}
