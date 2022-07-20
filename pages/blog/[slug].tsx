import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getFiles } from '@/lib/files'

export default function PostPage({ post }: { post: any }) {
  return (
    <>
      <MDXRemote {...post.content} />
    </>
  )
}

export async function getStaticPaths() {
  const files = getFiles('blog')
  console.log('files', files)
  //const posts = getFiles('blog')
  //return {
  //  paths: posts.map((p) => ({
  //    params: {
  //      slug: formatSlug(p).split('/'),
  //    },
  //  })),
  //  fallback: false,
  //}
  const paths = ['/test']
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
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