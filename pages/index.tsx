import React from 'react'
import Image from 'next/future/image'
import Typewriter from 'typewriter-effect'
import BlogPostCard from '@/components/BlogPostCard'
import CustomLink from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/files'
import type { GrayMatter } from '@/lib/types'
import SquigglyLine from '@/components/SquigglyLine'
import { socialLinks } from '@/lib/constants'
import SocialIcon from '@/components/SocialIcon'
import EmailMeButton from '@/components/EmailMeButton'
import Subscribe from '@/components/Subscribe'
import VideoCard from '@/components/VideoCard'

type Props = {
  featuredPosts: GrayMatter[]
}

export default function Page({ featuredPosts }: Props) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description="Building software to solve problems. Writing about tech and sharing my learnings about building services on the web."
      />
      <div className="h-full">
        <header className="flex flex-col gap-8 sm:flex-row sm:flex-row-reverse">
          <div className="sm:mb-auto">
            <Image
              alt="John Braat"
              height={130}
              width={130}
              src="/static/img/avatar.webp"
              sizes="30vw"
              priority
              className="cursor-heart rounded-full grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col pr-8">
              <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                John Braat
              </h1>
              <h2 className="h-16 font-mono text-lg text-neutral-800 dark:text-neutral-200 sm:mb-4 sm:h-auto">
                <Typewriter
                  options={{
                    strings: [
                      'Developer',
                      'Creator',
                      'Traveler',
                      'Learner',
                      'Striving to be better than yesterday',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    cursor: '&nbsp;',
                    cursorClassName: 'bg-sky-500 font-sans ml-0.5',
                  }}
                />
              </h2>
              <p className="mb-16 font-mono text-neutral-600 dark:text-neutral-400">
                Building software to solve problems. Self improvement nerd.
                Sharing my learnings about building products and services on the
                web.
              </p>
            </div>
          </div>
        </header>

        <section>
          <div className="mt-4 flex items-center gap-5">
            {socialLinks
              .filter((l) =>
                ['github', 'twitter', 'linkedin', 'instagram'].includes(l.kind),
              )
              .map((l) => (
                <SocialIcon key={l.kind} kind={l.kind} href={l.href} />
              ))}
            <EmailMeButton className="ml-4" />
          </div>
          <SquigglyLine className="my-20" />
        </section>

        <section className="mt-14">
          <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
            Read my stuff
          </h3>
          <div className="flex flex-col justify-between gap-7 sm:flex-row">
            {featuredPosts.map((p) => (
              <BlogPostCard
                key={p.slug}
                title={p.title}
                slug={p.slug}
                summary={p.summary}
              />
            ))}
          </div>
          <div className="flex items-center py-8 text-neutral-500">
            <CustomLink
              href="/blog"
              prefetch={false}
              className="transition-all ease-in-out hover:text-neutral-800 dark:hover:text-neutral-300"
            >
              All posts &rarr;
            </CustomLink>
          </div>
        </section>

        <section className="mt-14">
          <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
            Watch my stuff
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 font-mono">
            I make videos about tech behind SaaS and personal development topics. If you prefer watching over reading
            then this is the perfect place to start.
          </p>
          <VideoCard
            className="border-t"
            index={1}
            title="How to Leverage Time With Multitasking"
            href="https://www.youtube.com/watch?v=dYl25SRJ02w"
            length="6:04"
          />
          <div className="flex items-center py-8 text-neutral-500">
            <CustomLink
              href="https://www.youtube.com/channel/UCSYoM12jgDhSN57CMCqr-ZA"
              prefetch={false}
              className="transition-all ease-in-out hover:text-neutral-800 dark:hover:text-neutral-300"
            >
              All videos &rarr;
            </CustomLink>
          </div>
        </section>

        <section className="my-14">
          <Subscribe />
        </section>
      </div>
    </>
  )
}

export async function getStaticProps(context: any) {
  const posts = await getAllFilesFrontMatter('blog')
  const featuredPosts = posts.filter((p) => p?.featured)

  return { props: { featuredPosts } }
}
