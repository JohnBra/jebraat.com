import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from '@/lib/files'
import PostLayout from '@/layouts/PostLayout'
import Tweet from '@/components/Tweet'
import MDXComponents from '@/components/MDXComponents'
import { getTweets } from '@/lib/twitter'

export default function PostPage({ post }: { post: any }) {
  const StaticTweet = ({
    id,
    linkPreview,
  }: {
    id: string
    linkPreview?: any
  }) => {
    const tweet = post.tweets.find((tweet: any) => tweet.id === id)
    return <Tweet {...tweet} linkPreview={linkPreview} />
  }

  return (
    <PostLayout
      next={post?.next}
      prev={post?.prev}
      frontMatter={post.frontMatter}
    >
      <MDXRemote
        {...post.content}
        components={{
          ...MDXComponents,
          StaticTweet,
        }}
      />
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
  const tweets = await getTweets(post.tweetIds)

  return {
    props: {
      post: {
        content: post.html,
        tweets,
        prev,
        next,
        frontMatter: post.frontMatter,
      },
    },
  }
}
