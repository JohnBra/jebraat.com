import { GrayMatter } from '@/lib/types'
import dayjs from 'dayjs'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import React from 'react'
import cn from 'classnames'

type Props = {
  postFrontMatter: GrayMatter[]
  hideDate?: boolean
}

export default function ArticleList({ postFrontMatter, hideDate }: Props) {
  return (
    <ul>
      {!postFrontMatter.length && (
        <div className="my-6 text-neutral-800 dark:text-neutral-300">
          No posts found.
        </div>
      )}
      {postFrontMatter.map((frontMatter: GrayMatter) => {
        const { slug, date, title, summary, tags } = frontMatter
        return (
          <li key={slug} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              {!hideDate && date && (
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {dayjs(new Date(date)).format('MMMM DD, YYYY')}
                    </time>
                  </dd>
                </dl>
              )}
              <div className={cn('space-y-3',  hideDate ? 'xl:col-span-4' : 'xl:col-span-3')}>
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-gray-900 dark:text-gray-100"
                    >
                      {title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap">
                    {tags.map((tag: string) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  {summary}
                </div>
              </div>
            </article>
          </li>
        )
      })}
    </ul>
  )
}