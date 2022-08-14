import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { getAllFilesFrontMatter, getAllTags } from '@/lib/files'
import { kebabCase } from '@/lib/utils'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export default function Tag({ posts, tag }: any) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1) + ' Articles'
  return (
    <>
      <TagSEO
        title={`${tag} - ${siteMetadata.author}`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <ListLayout posts={posts} title={title} />
    </>
  )
}

export async function getStaticPaths() {
  const tags = await getAllTags('blog')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = allPosts.filter(
    (post) =>
      post.draft !== true &&
      post.tags.map((t: any) => kebabCase(t)).includes(params.tag),
  )

  // rss
  if (filteredPosts.length > 0) {
    const rssPath = path.join(root, 'public', 'tags', params.tag)
    fs.mkdirSync(rssPath, { recursive: true })
  }

  return { props: { posts: filteredPosts, tag: params.tag } }
}
