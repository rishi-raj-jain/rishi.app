import { getTagline, getTimelineItems } from '../api';

/** @type {import('../$types').PageServerLoad} */
export async function load({}) {
	let Timeline = {},
		aboutTagline = '';
	try {
		let arePosts = true,
			page = 1;
		while (arePosts) {
			let tempTimeline = (await getTimelineItems(5, page)) || [];
			if (tempTimeline.length > 0) {
				tempTimeline.forEach((a) => {
					if (Timeline.hasOwnProperty(a.content.Year)) {
						Timeline[a.content.Year].push(a);
					} else {
						Timeline[a.content.Year] = [a];
					}
				});
				page += 1;
			} else {
				arePosts = false;
			}
		}
		aboutTagline = await getTagline('about');
	} catch (e) {
		console.log(e);
	}
	return { aboutTagline, Timeline };
}
