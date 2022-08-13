import ListLayout from '@/layouts/ListLayout'
import { getAllFilesFrontMatter } from '@/lib/files'
import { GrayMatter } from '@/lib/types'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

type Props = {
  posts: GrayMatter[]
}

export default function Blog({ posts }: Props) {
  return (
    <>
      <PageSEO
        title={`Blog - ${siteMetadata.authorTitle}`}
        description="My learnings, thoughts on software, programming, tech, and my personal life."
      />
      <ListLayout posts={posts} title="Blog" />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
