import Icons from 'unplugin-icons/vite'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	],
	server: {
		port: 3000,
		open: true,
		host: '0.0.0.0'
	},
	preview: {
		port: 3000,
		open: true,
		host: '0.0.0.0'
	}
}

export default config
