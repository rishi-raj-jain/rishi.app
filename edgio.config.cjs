module.exports = {
	connector: './node_modules',
	backends: {
		web: {
			domainOrIp: 'sveltekit-rishi-app.vercel.app',
			hostHeader: 'sveltekit-rishi-app.vercel.app',
			disableCheckCert: true
		}
	}
}
