import { getTagline } from './api';

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	let data = undefined;
	try {
		data = await getTagline('home');
	} catch (e) {
		console.log(e);
	}
	return {
		data
	};
}
