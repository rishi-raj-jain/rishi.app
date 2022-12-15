import { getTagline } from './api'

export async function load({}) {
	let data = undefined
	try {
		data = await getTagline('home')
	} catch (e) {
		console.log(e)
	}
	return {
		data
	}
}
