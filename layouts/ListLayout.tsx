import React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import type { GrayMatter } from '@/lib/types'
import SquigglyLine from '@/components/SquigglyLine'
import ArticleList from '@/components/ArticleList'

type Props = {
  posts: GrayMatter[]
  title: React.ReactNode
}

export default function ListLayout({ posts, title }: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter: GrayMatter) => {
    const searchContent =
      frontMatter?.title + frontMatter?.summary + frontMatter?.tags?.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <div className="min-h-90">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
          {title}
        </h1>
        <div className="relative">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <SquigglyLine className="my-3" />

      <ArticleList postFrontMatter={filteredBlogPosts} />
    </div>
  )
}
