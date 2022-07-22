import { MDXRemote } from 'next-mdx-remote'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/files'

export default function PostPage({ post }: { post: any }) {
  return (
    <>
      <MDXRemote {...post.content} />
    </>
  )
}

export async function getStaticPaths() {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const slug = context.params?.slug?.join('/')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === slug)
  const prev = allPosts?.[postIndex + 1] ?? null
  const next = allPosts?.[postIndex - 1] ?? null
  const post = await getFileBySlug('blog', slug)
  const authorList = post.frontMatter?.authors ?? ['default']

  return {
    props: {
      post: {
        content: post.mdxSource
      }
    }
  }
}