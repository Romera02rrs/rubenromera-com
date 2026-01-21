import { getAllPosts, getUniqueTagsWithCount } from '@/utils'

export const prerender = true

export const GET = async () => {
	const posts = await getAllPosts()
	const tags = getUniqueTagsWithCount(posts)
	const site = import.meta.env.SITE

	// Define static pages - includes home, blog (from menu), tags, and tools
	const staticPages = ['', '/blog', '/tags', '/tools']

	// Generate URLs for blog posts
	const blogUrls = posts.map((post) => `/blog/${post.slug}`)

	// Generate URLs for tag pages
	const tagUrls = Array.from(tags.keys()).map((tag) => `/tags/${tag}`)

	// Combine all URLs
	const allUrls = [...staticPages, ...blogUrls, ...tagUrls]

	// Generate sitemap XML
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
	.map(
		(url) => `  <url>
    <loc>${site}${url}</loc>
    <changefreq>weekly</changefreq>
  </url>`
	)
	.join('\n')}
</urlset>`

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	})
}
