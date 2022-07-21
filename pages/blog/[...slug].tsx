import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { formatSlug, getAllFilesFrontMatter, getFiles } from '@/lib/files'

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
  console.log('all psts front matter', allPosts)
  // MDX text - can be from a local file, database, anywhere
  console.log('context', context)
  const source = 'Some **mdx** text, with a component'
  const mdxSource = await serialize(source)
  return {
    props: {
      post: {
        content: mdxSource
      }
    }
  }
}