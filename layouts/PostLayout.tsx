//@ts-nocheck
import React from 'react'
import Image from 'next/image'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'


//const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

type Props = {
  frontMatter: any;
  authorDetails: any;
  next: any;
  prev: any;
  children: React.ReactNode;
}
export default function PostLayout({ frontMatter, authorDetails, next, prev, children }: Props) {
  const { slug, fileName, date, title, images, tags } = frontMatter
  console.log('slug', slug)
  console.log('filename', fileName)
  console.log('images', images)

  return (
    <SectionContainer>
      <article className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <div className="relative">
          {/* Sidebar */}
          {/*
          <div className="hidden xl:block fixed top-1/3 -mx-32 divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 w-18 h-0">
            <div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </div>
          </div>
          */}
          {/* Blog post with title and author */}
          <div className="relative">
            <header className="pt-6 xl:pb-6 space-y-1">
              <PageTitle>{title}</PageTitle>
              <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
                <div className="flex items-center">
                  <div>IMG</div>
                  <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Jonathan Braat / {new Date(date).toISOString()}
                  </p>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
                  {frontMatter.readingTime}
                </p>
              </div>
              {/*
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              */}
            </header>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-3xl pt-10 pb-8 dark:prose-dark">{children}</div>
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

    </SectionContainer>
  )
}