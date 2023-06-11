export const themeChangeListener = () => {
	if (typeof window === 'undefined') return
	let sessionTheme = window.sessionStorage.getItem('theme')
	if (sessionTheme === 'light') {
		document.documentElement.classList.remove('dark')
	} else {
		document.documentElement.classList.add('dark')
	}
}

export const toggleTheme = () => {
	if (typeof window === 'undefined') return
	let existingTheme
	if (window.sessionStorage.getItem('theme')) {
		existingTheme = window.sessionStorage.getItem('theme')
	}
	if (existingTheme) {
		window.sessionStorage.setItem('theme', existingTheme === 'dark' ? 'light' : 'dark')
	} else {
		window.sessionStorage.setItem('theme', 'light')
	}
	themeChangeListener()
}
