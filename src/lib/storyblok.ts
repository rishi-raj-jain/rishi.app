import { env } from '$env/dynamic/private'

async function fetchAPI(query: string, { variables, preview }: { variables?: any; preview?: any } = {}) {
	const res = await fetch('https://gapi.storyblok.com/v1/api', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Token: env.STORYBLOK_API_KEY,
			Version: preview ? 'draft' : 'published'
		},
		body: JSON.stringify({
			query,
			variables
		})
	})
	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getTagline(slug: string) {
	const data = await fetchAPI(`
    {
      TaglineItem(id: "taglines/${slug}"){
        content{
          Text
        }
      }
    }
  `)
	return data?.TaglineItem.content.Text
}

export async function getAllPostsWithSlug() {
	const data = await fetchAPI(`
      {
        PostItems {
          items {
            slug
          }
        }
      }
    `)
	return data?.PostItems.items
}

export async function getAllPostsForHome() {
	const data = await fetchAPI(
		`
      {
        PostItems(sort_by: "first_published_at:desc") {
          items {
            slug
            first_published_at
            content {
              intro
              title
            }
          }
        }
      }
    `
	)
	return data?.PostItems.items
}

export async function getRecommendedPosts(per_page_items: string | number, page: string | number) {
	const data = await fetchAPI(
		`
      {
        PostlinkItems (sort_by: "first_published_at:desc", per_page: ${per_page_items}, page: ${page}){
          items{
            first_published_at
            content{
              Title
              Url {
                url
              }
            }
          }
        }
      }
    `
	)
	return data?.PostlinkItems.items
}

export async function getVideoItems(per_page_items: string | number, page: string | number) {
	const data = await fetchAPI(
		`
      {
        VideoItems (per_page: ${per_page_items}, page: ${page}){
          items {
            content {
              name
              description
              video
              thumbnail {
                filename
              }
            }
          }
        }
      }
    `
	)
	return data?.VideoItems.items
}

export async function getTimelineItems(per_page_items: string | number, page: string | number) {
	const data = await fetchAPI(
		`
      {
        TimelineitemItems (per_page: ${per_page_items}, page: ${page}){
          items {
            first_published_at
            content {
              Year
              Title
              Description
            }
          }
        }
      }
    `
	)
	return data?.TimelineitemItems.items
}

export async function getProjectItems(some: string | number) {
	const data = await fetchAPI(
		`
      {
        ProjectitemItems (sort_by: "first_published_at:desc"${some ? ', per_page: 3' : ''}){
          items{
            content{
              name
              website {
                url
              }
              github {
                url
              }
              twitter {
                url
              }
              medium {
                url
              }
              figma {
                url
              }
              behance {
                url
              }
              description
            }
          }
        }
      }
    `
	)
	return data?.ProjectitemItems.items
}

export async function getOtherBlogs(first_published_at: string | Date, excluded_slug: string, items: string | number, desc: string | boolean) {
	const data = await fetchAPI(
		`
      query ($first_published_at:String!, $excluded_slug:String!) {
        PostItems(
          per_page: ${items},
          excluding_slugs: $excluded_slug,
          sort_by: "first_published_at:${desc ? 'desc' : 'asc'}",
          first_published_at_${desc ? 'l' : 'g'}t: $first_published_at,
        ) {
          items {
            name
            slug
            content {
              image
            }
          }
        }
      }
    `,
		{
			variables: {
				first_published_at,
				excluded_slug
			}
		}
	)
	return data?.PostItems.items
}

export async function getPost(slug: string) {
	const data = await fetchAPI(
		`
    query PostBySlug($slug: ID!) {
      PostItem(id: $slug) {
        slug
        full_slug
        published_at
        first_published_at
        id
        content {
          long_text
          intro
          title
          image
          author {
            name
            content
          }
        }
      }
    }
    `,
		{
			variables: {
				slug: `posts/${slug}`
			}
		}
	)
	return {
		post: data?.PostItem
	}
}

export async function getShowcaseItems(per_page_items: string | number, page: string | number) {
	const data = await fetchAPI(
		`
      {
        ShowcaseItems (sort_by:"content.date:desc", per_page: ${per_page_items}, page: ${page}) {
          items {
            content {
              name
              date
              intro
              links
            }
            full_slug
          }
        }
      }
    `
	)
	return data?.ShowcaseItems.items
}

export async function getShowcaseItem(slug: string) {
	const data = await fetchAPI(
		`
      {
        ShowcaseItem (id:"showcase/${slug}") {
          slug
          full_slug
          published_at
          first_published_at
          id
          content {
            name
            date
            intro
            links
            image
            description
          }
        }
      }
    `
	)
	return { post: data?.ShowcaseItem }
}
