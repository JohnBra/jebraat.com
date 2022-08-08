import { MDXRemote } from 'next-mdx-remote'
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from '@/lib/files'
import PostLayout from '@/layouts/PostLayout'
import MDXComponents from '@/components/MDXComponents'

export default function PostPage({ post }: { post: any }) {
  return (
    <PostLayout
      next={post?.next}
      prev={post?.prev}
      frontMatter={post.frontMatter}
    >
      <MDXRemote {...post.content} components={MDXComponents} />
    </PostLayout>
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

  return {
    props: {
      post: {
        content: post.html,
        prev,
        next,
        frontMatter: post.frontMatter,
      },
    },
  }
}
