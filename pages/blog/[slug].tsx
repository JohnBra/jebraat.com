import { MDXRemote } from 'next-mdx-remote'


export default function PostPage({ post }: { post: any }) {
  return (
    <>
      <MDXRemote {...post.content} />
    </>
  )
}