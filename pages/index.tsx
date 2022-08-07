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
        <header className="flex flex-col sm:flex-row sm:flex-row-reverse gap-8">
          <div className="sm:mb-auto">
            <Image
              alt="John Braat"
              height={130}
              width={130}
              src="/static/img/avatar.webp"
              sizes="30vw"
              priority
              className="rounded-full grayscale hover:grayscale-0 transition-all ease-in-out duration-500 cursor-heart"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                John Braat
              </h1>
              <h2 className="h-16 sm:h-auto text-neutral-800 dark:text-neutral-200 sm:mb-4 text-lg font-mono">
                <Typewriter
                  options={{
                    strings: ['Developer', 'Creator', 'Traveler', 'Learner', 'Striving to be better than yesterday'],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    cursor: '&#x258C;',
                    cursorClassName: 'relative text-sky-500 ml-0.5 -top-0.5'
                  }}
                />
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-16 font-mono">
                Building software to solve problems. Self improvement nerd. Sharing my learnings about building products and services on the web.
              </p>
            </div>
          </div>

        </header>

        <section>
          <div className="flex items-center gap-5 mt-4">
            {socialLinks.filter(l => ['github', 'twitter', 'linkedin', 'instagram'].includes(l.kind)).map(l => (
              <SocialIcon key={l.kind} kind={l.kind} href={l.href} />
            ))}
            <EmailMeButton className="ml-4" />
          </div>
          <SquigglyLine className="my-20" />
        </section>

        <section className="mt-14">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Read my stuff
          </h3>
          <div className="flex flex-col sm:flex-row gap-7 justify-between">
            {featuredPosts.map(p => (
              <BlogPostCard
                key={p.slug}
                title={p.title}
                slug={p.slug}
                summary={p.summary}
              />
            ))}
          </div>
          <div className="flex items-center text-neutral-500 py-8">
            <CustomLink
              href="/blog"
              prefetch={false}
              className="hover:text-neutral-800 dark:hover:text-neutral-300 transition-all ease-in-out"
            >
              All posts &rarr;
            </CustomLink>
          </div>
        </section>

        <section className="mt-14">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Watch my stuff
          </h3>
          <div className="flex items-center text-neutral-500 py-8">
            <CustomLink
              href="https://www.youtube.com/channel/UCSYoM12jgDhSN57CMCqr-ZA"
              prefetch={false}
              className="hover:text-neutral-800 dark:hover:text-neutral-300 transition-all ease-in-out"
            >
              All videos &rarr;
            </CustomLink>
          </div>
        </section>

        <section className="my-14 border border-purple-500 py-24">
          <div>
            Newsletter sign up
          </div>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps(context: any) {
  const posts = await getAllFilesFrontMatter('blog')
  const featuredPosts = posts.filter(p => p?.featured)

  return { props: { featuredPosts } }
}
