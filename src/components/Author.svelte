<script lang="ts">
	interface Post {
		content: {
			author: {
				name: string
				content: {
					picture: {
						filename: string
					}
				}
			}
		}
	}

	export let post: Post
</script>

<div class="flex flex-row items-center space-x-3">
	<img width={30} height={30} alt={post.content.author.name} title={post.content.author.name} src={post.content.author.content.picture.filename} />
	<div class="flex flex-col">
		<span class="text-sm">{post.content.author.name}</span>
		<a rel="noreferrer" class="text-xs text-blue-500" href="https://twitter.com/rishi_raj_jain_" target="_blank"> @rishi_raj_jain_</a>
	</div>
</div>
