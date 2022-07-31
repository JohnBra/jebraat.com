import type { NextPage } from 'next'
import BlogPostCard from '@/components/BlogPostCard'
import Image from 'next/future/image'
import CustomLink from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const Home: NextPage = () => {
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
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                John Braat
              </h1>
              <h2 className="text-neutral-800 dark:text-neutral-200 mb-4 text-lg">
                Developer and Creator
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-16">
                Building software to solve problems. Writing about tech and sharing my learnings about building products/services on the web.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-14">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            From the Blog
          </h3>
          <div className="flex flex-col sm:flex-row gap-5 justify-between">
            <BlogPostCard
              title="A really cool post about something I care"
              slug="style-guides-component-libraries-design-systems"
            />
            <BlogPostCard
              title="A really cool post about something I care"
              slug="rust"
            />
            <BlogPostCard
              title="A really cool post about something I care"
              slug="react-state-management"
            />
          </div>
          <div className="flex items-center text-neutral-500 py-8">
            <CustomLink
              href="/blog"
              prefetch={false}
              className="hover:text-neutral-800 dark:hover:text-neutral-300 transition-all ease-in-out"
            >
              Discover more posts &rarr;
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

export default Home
