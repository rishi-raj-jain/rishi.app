<script lang="ts">
	export let slug: string

	let name: string = ''
	let email: string = ''
	let content: string = ''
</script>

<form
	on:submit={(e) => {
		e.preventDefault()
		fetch(`/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				slug,
				email,
				content
			})
		})
		name = ''
		email = ''
		content = ''
	}}
	class="mt-10 flex w-full flex-col"
>
	<h1 class="text-lg font-semibold">Write a comment</h1>
	<div class="flex flex-col items-start sm:flex-row sm:space-x-5">
		<input
			required
			value={name}
			placeholder="Name*"
			on:change={(e) => {
				name = e.target.value
			}}
			class="mt-5 w-full appearance-none rounded border px-5 py-2 text-black outline-none ring-0 duration-200 hover:border-black hover:shadow focus:border-black sm:w-1/2"
		/>
		<div class="mt-5 flex w-full flex-col space-y-1 sm:w-1/2">
			<input
				value={email}
				placeholder="Email (Optional)"
				on:change={(e) => {
					email = e.target.value
				}}
				class="w-full appearance-none rounded border px-5 py-2 text-black outline-none ring-0 duration-200 hover:border-black hover:shadow focus:border-black"
			/>
			<span class="text-sm text-gray-400">Email will remain confidential.</span>
		</div>
	</div>
	<textarea
		required
		value={content}
		on:change={(e) => {
			content = e.target.value
		}}
		placeholder={`Comment*\nMaximum of 500 characters.`}
		class="mt-5 appearance-none rounded border px-5 pb-10 pt-5 text-black outline-none ring-0 duration-200 hover:border-black hover:shadow focus:border-black"
	/>
	<button type="submit" class="mt-5 w-[200px] appearance-none rounded border px-5 py-2 text-center hover:bg-gray-100"> Post a comment </button>
</form>
