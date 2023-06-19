module.exports = {
	connector: './',
	backends: {
		web: {
			domainOrIp: 'sveltekit-rishi-app.vercel.app',
			hostHeader: 'sveltekit-rishi-app.vercel.app',
			disableCheckCert: true
		}
	}
}
