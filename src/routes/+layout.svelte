<script>
	import '../app.css'
	import Header from './Header.svelte'
</script>

<Header />
<main class="flex flex-col items-center text-black dark:text-gray-200">
	<div class="flex w-full max-w-[90vw] lg:max-w-[75vw] flex-col py-10 sm:px-10">
		<slot />
	</div>
</main>
