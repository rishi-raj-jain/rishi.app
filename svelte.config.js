import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel({
			edge: false,
			external: [],
			split: false
		})
	}
};

export default config;
