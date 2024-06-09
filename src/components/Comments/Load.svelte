<script lang="ts">
	import { comments } from '@/src/stores'

	export let data: { slug: string }
</script>

<div class="mt-10 w-full border-t pt-10">
	<button
		on:click={() => {
			comments.set(new Array(3).fill(0).map((_) => ({ loading: true, time: new Date().getMilliseconds() })))
			fetch(`/comments?slug=${data.slug}`)
				.then((res) => res.json())
				.then((res) => {
					if (res) comments.set(res)
				})
		}}
		class="w-[200px] appearance-none rounded border px-5 py-2 text-center hover:bg-gray-100"
	>
		Load Comments
	</button>
</div>
