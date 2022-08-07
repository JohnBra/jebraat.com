import React from 'react'
import Image from 'next/future/image'
import dayjs from 'dayjs'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { PostSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Tag from '@/components/Tag'
import ViewCounter from '@/components/ViewCounter'


type Props = {
  frontMatter: any;
  next: any;
  prev: any;
  children: React.ReactNode;
}

export default function PostLayout({ frontMatter, next, prev, children }: Props) {
  const { date, title, summary, slug, tags } = frontMatter

  return (
    <>
      <PostSEO
        title={title}
        summary={summary}
        date={date}
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        {...frontMatter}
      />
      <article className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700 selection:bg-orange-300 selection:dark:bg-orange-700">
        <div className="relative">
          {/* Sidebar */}
          <div className="hidden xl:block fixed top-1/3 -mx-32 divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 w-18 h-0">
            <div>
              <ViewCounter slug={slug} />
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr;
                </Link>
              </div>
            </div>
          </div>
          {/* Blog post with title and author */}
          <div className="relative">
            <header className="pt-6 xl:pb-6 space-y-1">
              <PageTitle>{title}</PageTitle>
              <div className="flex flex-col-reverse items-start justify-between w-full mt-2 md:flex-row md:items-center">
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
                    Jonathan Braat / {dayjs(new Date(date)).format('MMMM DD, YYYY')} ⋅ {frontMatter.readingTime}
                  </p>
                </div>
                <p className="hidden md:block min-w-32">
                  {tags.map((tag: any) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </p>
              </div>
            </header>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose sm:prose-xl max-w-3xl pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>

            <div>
              {(next || prev) && (
                <nav className="grid grid-cols-2 py-4 gap-3">
                  {prev && (
                    <div className="col-span-1 group">
                      <Link href={`/blog/${prev.slug}`}>
                        <div className="text-left p-3 flex flex-col border border-gray-400 dark:border-gray-700 rounded-md group-hover:border-primary-600 cursor-pointer transition-all ease-in-out">
                          <div className="text-sm text-bold tracking-wide text-gray-700 dark:text-gray-200">
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
                    <div className="col-start-2 col-span-1 group">
                      <Link href={`/blog/${next.slug}`}>
                        <div className="text-right p-3 flex flex-col border border-gray-400 dark:border-gray-700 rounded-md group-hover:border-primary-600 cursor-pointer transition-all ease-in-out">
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