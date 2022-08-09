import React, { useEffect } from 'react'
import Image from 'next/future/image'
import dayjs from 'dayjs'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { PostSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Tag from '@/components/Tag'
import useSWR from 'swr'
import { PostMeta } from '@/lib/types'
import fetcher from '@/lib/fetcher'
import { EyeIcon, ShareIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'

type Props = {
  frontMatter: any
  next: any
  prev: any
  children: React.ReactNode
}

export default function PostLayout({
  frontMatter,
  next,
  prev,
  children,
}: Props) {
  const { date, title, summary, slug, tags } = frontMatter
  const { data } = useSWR<PostMeta>(`/api/blog/meta/${slug}`, fetcher)

  useEffect(() => {
    const incrementViewCount = () => {
      fetch(`/api/blog/views/${slug}`, {
        method: 'POST',
      }).catch((e) => console.warn(e))
    }

    incrementViewCount()
  }, [slug])

  return (
    <>
      <PostSEO
        title={title}
        summary={summary}
        date={date}
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        {...frontMatter}
      />
      <article className="selection:bg-orange-300 selection:dark:bg-orange-700 xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <div className="relative">
          {/* Sidebar */}
          <div className="fixed top-1/3 -mx-28 hidden h-0 divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:block xl:divide-y-0">
            <div className="">
              <div className="flex flex-col items-center py-3 px-6">
                <EyeIcon className="h-9 w-9 text-neutral-900 dark:text-neutral-200" />
                <div className="text-xs">{data?.views}</div>
              </div>
              <button className="flex flex-col items-center py-3 px-6">
                <HeartIcon className="h-9 w-9 text-neutral-900 dark:text-neutral-200" />
                <div className="text-center text-xs">{data?.likes}</div>
              </button>
              <button className="block py-3 px-6">
                <ShareIcon className="h-9 w-9 text-neutral-900 dark:text-neutral-200" />
              </button>
            </div>
          </div>
          {/* Blog post with title and author */}
          <div className="relative">
            <header className="space-y-1 pt-6 xl:pb-6">
              <PageTitle>{title}</PageTitle>
              <div className="mt-2 flex w-full flex-col-reverse items-start justify-between md:flex-row md:items-center">
                <div className="flex items-center">
                  <Image
                    alt="John Braat"
                    height={30}
                    width={30}
                    src="/static/img/avatar.webp"
                    sizes="5vw"
                    priority
                    className="rounded-full"
                  />
                  <p className="ml-2 text-sm text-neutral-600 dark:text-neutral-400">
                    Jonathan Braat /{' '}
                    {dayjs(new Date(date)).format('MMMM DD, YYYY')} ⋅{' '}
                    {frontMatter.readingTime}
                  </p>
                </div>
                <p className="min-w-32 hidden md:block">
                  {tags.map((tag: any) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </p>
              </div>
            </header>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-3xl pt-10 pb-8 dark:prose-dark sm:prose-xl">
                {children}
              </div>
            </div>

            <div>
              {(next || prev) && (
                <nav className="grid grid-cols-2 gap-3 py-4">
                  {prev && (
                    <div className="group col-span-1">
                      <Link href={`/blog/${prev.slug}`}>
                        <div className="flex cursor-pointer flex-col rounded-md border border-gray-400 p-3 text-left transition-all ease-in-out group-hover:border-primary-600 dark:border-gray-700">
                          <div className="text-bold text-sm tracking-wide text-gray-700 dark:text-gray-200">
                            Previous
                          </div>
                          <div className="text-primary-500">
                            &larr; {prev.title}
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                  {next && (
                    <div className="group col-span-1 col-start-2">
                      <Link href={`/blog/${next.slug}`}>
                        <div className="flex cursor-pointer flex-col rounded-md border border-gray-400 p-3 text-right transition-all ease-in-out group-hover:border-primary-600 dark:border-gray-700">
                          <div className="text-sm tracking-wide text-gray-700 dark:text-gray-200">
                            Next
                          </div>
                          <div className="text-primary-500">
                            {next.title} &rarr;
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                </nav>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
