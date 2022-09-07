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
      related={post.related}
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
  const allPostsFrontMatter = await getAllFilesFrontMatter('blog')
  const slug = context.params?.slug?.join('/')
  const postIndex = allPostsFrontMatter.findIndex((post) => formatSlug(post.slug) === slug)

  // very simple way of finding similar blog articles depending on tag matches
  // count tag matches for each other post to current post
  // TODO: maybe improve this with a 'similar tags' algo
  const otherPostsFrontMatter = [...allPostsFrontMatter]
  otherPostsFrontMatter.splice(postIndex, 1)
  const postTagSet = new Set(allPostsFrontMatter?.[postIndex]?.tags)
  const matches = new Map<string, number>([])
  for (let i = 0; i < otherPostsFrontMatter.length; i++) {
    const postFrontMatter = otherPostsFrontMatter[i]
    matches.set(postFrontMatter.slug, 0)
    for (const t of postFrontMatter.tags) {
      if (postTagSet.has(t)) {
        matches.set(postFrontMatter.slug, (matches.get(postFrontMatter.slug) as number) + 1)
      }
    }
    postFrontMatter.matches = matches.get(postFrontMatter.slug)
  }

  // sort related by matches descending if matches are equal sort by date descending
  const related = otherPostsFrontMatter.sort((a, b) =>
    b.matches - a.matches !== 0 ? b.matches - a.matches : new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const prev = allPostsFrontMatter?.[postIndex + 1] ?? null
  const next = allPostsFrontMatter?.[postIndex - 1] ?? null
  const post = await getFileBySlug('blog', slug)
  const tweets = await getTweets(post.tweetIds)

  return {
    props: {
      post: {
        content: post.html,
        tweets,
        prev,
        next,
        related,
        frontMatter: post.frontMatter,
      },
    },
  }
}
