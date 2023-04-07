const { join } = require('path')
const { DeploymentBuilder } = require('@edgio/core/deploy')

module.exports = async (options) => {
	const builder = new DeploymentBuilder()
	builder.clearPreviousBuildOutput()
	await builder.exec('npm run build')
	const appDir = process.cwd()
	builder.writeFileSync(join(builder.jsDir, '__backends__', 'package.json'), JSON.stringify({ type: 'commonjs' }))
	builder.addJSAsset(join(appDir, '.vercel', 'output', 'functions'), join('dist'))
	builder.addJSAsset(join(appDir, '.vercel', 'output', 'config.json'), join('config.json'))
	await builder.build()
}
