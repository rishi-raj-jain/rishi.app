export interface Technology {
	name: string
	logo: string // Simple Icons slug or URL
	color?: string
}

export interface Website {
	title: string
	href: string
	description?: string
	symbol?: string
	techStack: Technology[]
}

export const websites: Website[] = [
	{
		title: 'JobsFromAnywhere',
		href: 'https://jobsfromanywhere.com/',
		symbol: 'https://ik.imagekit.io/vjeqenuhn/JobsFromAnywhere/logo.png',
		description: 'Fully remote jobs from anywhere in the world. Carefully curated from 100% worldwide remote companies.',
		techStack: [
			{ name: 'Next.js', logo: 'nextdotjs', color: '#000000' },
			{ name: 'React', logo: 'react', color: '#61DAFB' },
			{ name: 'TypeScript', logo: 'typescript', color: '#3178C6' },
			{ name: 'Tailwind CSS', logo: 'tailwindcss', color: '#06B6D4' },
			{ name: 'Vercel', logo: 'vercel', color: '#000000' }
		]
	},
	{
		title: 'LaunchFa.st',
		href: 'https://www.launchfa.st/',
		symbol: 'https://ik.imagekit.io/vjeqenuhn/launchfast-website/purple-icon.png',
		description: 'Production-ready SaaS starter kits in Astro, SvelteKit, and Next.js. Save countless hours with comprehensive integrations.',
		techStack: [
			{ name: 'Astro', logo: 'astro', color: '#000000' },
			{ name: 'TypeScript', logo: 'typescript', color: '#3178C6' },
			{ name: 'Tailwind CSS', logo: 'tailwindcss', color: '#06B6D4' },
			{ name: 'Vercel', logo: 'vercel', color: '#000000' }
		]
	},
	{
		title: 'Dualment',
		href: 'https://dualment.com/',
		symbol: 'https://dualment.com/assets/favicons/apple-touch-icon.png',
		description: 'A comprehensive platform for dual mentorship and learning.',
		techStack: [
			{ name: 'Astro', logo: 'astro', color: '#000000' },
			{ name: 'TypeScript', logo: 'typescript', color: '#3178C6' },
			{ name: 'Tailwind CSS', logo: 'tailwindcss', color: '#06B6D4' },
			{ name: 'Vercel', logo: 'vercel', color: '#000000' }
		]
	},
	{
		title: 'itsmy.fyi',
		href: 'https://itsmy.fyi/',
		symbol: 'https://ik.imagekit.io/vjeqenuhn/itsmy.fyi/logo.png',
		description: 'Personal information and portfolio platform.',
		techStack: [
			{ name: 'Astro', logo: 'astro', color: '#000000' },
			{ name: 'TypeScript', logo: 'typescript', color: '#3178C6' },
			{ name: 'Tailwind CSS', logo: 'tailwindcss', color: '#06B6D4' },
			{ name: 'Vercel', logo: 'vercel', color: '#000000' }
		]
	},
	{
		title: 'Tripinfox',
		href: 'https://www.tripinfox.com/',
		symbol: 'https://www.tripinfox.com/symbol.png',
		description: 'Travel information and planning platform.',
		techStack: [
			{ name: 'Next.js', logo: 'nextdotjs', color: '#000000' },
			{ name: 'React', logo: 'react', color: '#61DAFB' },
			{ name: 'TypeScript', logo: 'typescript', color: '#3178C6' },
			{ name: 'Tailwind CSS', logo: 'tailwindcss', color: '#06B6D4' },
			{ name: 'Vercel', logo: 'vercel', color: '#000000' }
		]
	},
	{
		title: 'The Ahuja Lab',
		href: 'https://new-ahuja.vercel.app/',
		symbol: 'https://a.storyblok.com/f/191355/563x563/bb7d258d8e/logo.png',
		description: 'Research laboratory website for scientific work and publications.',
		techStack: [
			{ name: 'Astro', logo: 'astro', color: '#000000' },
			{ name: 'TypeScript', logo: 'typescript', color: '#3178C6' },
			{ name: 'Tailwind CSS', logo: 'tailwindcss', color: '#06B6D4' },
			{ name: 'Vercel', logo: 'vercel', color: '#000000' }
		]
	},
	{
		title: 'Visvayu',
		href: 'https://visvayu.vercel.app/',
		symbol: 'https://visvayu.vercel.app/favicon.ico',
		description: 'A modern web application for enhanced user experiences.',
		techStack: [
			{ name: 'Next.js', logo: 'nextdotjs', color: '#000000' },
			{ name: 'React', logo: 'react', color: '#61DAFB' },
			{ name: 'TypeScript', logo: 'typescript', color: '#3178C6' },
			{ name: 'Tailwind CSS', logo: 'tailwindcss', color: '#06B6D4' },
			{ name: 'Vercel', logo: 'vercel', color: '#000000' }
		]
	},
	{
		title: 'rishi.app',
		href: 'https://rishi.app/',
		symbol: 'https://ik.imagekit.io/vjeqenuhn/static/icon.png',
		description: 'Personal portfolio and blog showcasing projects and writings.',
		techStack: [
			{ name: 'SvelteKit', logo: 'svelte', color: '#FF3E00' },
			{ name: 'TypeScript', logo: 'typescript', color: '#3178C6' },
			{ name: 'Tailwind CSS', logo: 'tailwindcss', color: '#06B6D4' },
			{ name: 'Vercel', logo: 'vercel', color: '#000000' }
		]
	},
	{
		title: 'Capgo',
		href: 'https://capgo.app/',
		symbol: 'https://capgo.app/favicon.svg',
		description: 'Live updates for Capacitor apps - ship updates instantly.',
		techStack: [
			{ name: 'Astro', logo: 'astro', color: '#000000' },
			{ name: 'Vue.js', logo: 'vuedotjs', color: '#4FC08D' },
			{ name: 'TypeScript', logo: 'typescript', color: '#3178C6' },
			{ name: 'Cloudflare', logo: 'cloudflare', color: '#F38020' }
		]
	},
	{
		title: 'Arian Architects',
		href: 'https://arian-architects.github.io/',
		symbol: 'https://arian-architects.github.io/static/favicon-image.png',
		description: 'A leading architecture studio in Delhi practicing architecture, interiors and furniture design.',
		techStack: [
			{ name: 'Astro', logo: 'astro', color: '#000000' },
			{ name: 'TypeScript', logo: 'typescript', color: '#3178C6' },
			{ name: 'Tailwind CSS', logo: 'tailwindcss', color: '#06B6D4' },
			{ name: 'GitHub Pages', logo: 'github', color: '#181717' }
		]
	}
]

// Extract all unique technologies
export function getAllTechnologies(): Technology[] {
	const techMap = new Map<string, Technology>()
	websites.forEach((website) => {
		website.techStack.forEach((tech) => {
			if (!techMap.has(tech.name)) {
				techMap.set(tech.name, tech)
			}
		})
	})
	return Array.from(techMap.values()).sort((a, b) => a.name.localeCompare(b.name))
}
