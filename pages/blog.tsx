import ListLayout from '@/layouts/ListLayout'
import { getAllFilesFrontMatter } from '@/lib/files'
import { GrayMatter } from '@/lib/types'

type Props = {
  posts: GrayMatter[]
}

export default function Blog({ posts }: Props) {
  return (
    <>
      <ListLayout posts={posts} title="All Posts" />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}