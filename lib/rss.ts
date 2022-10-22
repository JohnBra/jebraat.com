import fs from 'fs'
import { Feed} from 'feed'
import siteMetadata from '@/data/siteMetadata'
import { GrayMatter } from '@/lib/types'

export async function generateRssFeed(posts: GrayMatter[]) {
  const date = new Date()
  const { siteUrl, author, email, twitter } = siteMetadata
  const rssAuthor = {
    name: author,
    email: email,
    link: twitter
  }

  const feed = new Feed({
    title: 'John Braat\'s Blog',
    description: 'My learnings, thoughts on software, programming, tech, and my personal life.',
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/static/img/social-banner.png`,
    favicon: `${siteUrl}/static/icons/favicon-32x32.png`,
    copyright: `© ${date.getFullYear()} Spryse Limited™. All rights reserved.`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
      atom: `${siteUrl}/rss/atom.xml`,
    },
    author: rssAuthor
  })

  for (const p of posts) {
    const url = `${siteUrl}/blog/${p.slug}`

    feed.addItem({
      title: p.title,
      id: url,
      link: url,
      description: p.summary,
      content: p.summary,
      author: [rssAuthor],
      contributor: [rssAuthor],
      date: new Date(p.lastmod)
    })
  }

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
}