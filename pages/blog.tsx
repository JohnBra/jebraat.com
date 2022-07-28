import { getAllFilesFrontMatter } from '@/lib/files'
import { GrayMatter } from '@/lib/types'
import ListLayout from '@/layouts/ListLayout'

type Props = {
  posts: GrayMatter[]
}

export default function Blog({ posts }: Props) {
  console.log('posts', posts)
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