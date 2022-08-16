import React from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/future/image'
import { socialLinks } from '@/lib/constants'
import CustomLink from '@/components/Link'
import { components } from '@/components/SocialIcon'
import Subscribe from '@/components/Subscribe'

export default function Links() {
  return (
    <>
      <PageSEO
        title={`Links - ${siteMetadata.authorTitle}`}
        description="All my links to socials and other networks you can find me on."
      />
      <div className="min-h-90">
        <h1 className="sr-only">Links</h1>
        <div className="mt-4 flex flex-col gap-3 items-center justify-center">
          <Image
            alt="John Braat"
            height={150}
            width={150}
            src="/static/img/avatar.webp"
            sizes="40vw"
            priority
            className="cursor-heart rounded-full grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
          />

          <p className="py-4 mt-3 mb-2 text-4xl">
            All my links 👇
          </p>
          <div className="flex flex-col w-full">
            {socialLinks.filter(l => l.kind !== 'email').map((l) => {
              const SVGComponent = components[l.kind]
              return (
                <CustomLink
                  className="mb-6 w-full rounded-lg border-2 border-primary-400 bg-neutral-100 py-4 px-6 font-mono text-lg text-neutral-500 transition-all ease-in-out hover:scale-105 hover:border-primary-500 hover:text-neutral-700 hover:shadow-lg hover:shadow-primary-300 dark:border-primary-500 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-primary-400 dark:hover:text-neutral-100 dark:hover:shadow-primary-500"
                  key={l.kind}
                  href={l.href}
                >
                <span className="flex items-center gap-4">
                  <SVGComponent className="h-9 w-9 fill-current text-neutral-500 hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100" />
                  {l.name}
                </span>
                </CustomLink>
              )
            })}

            <Subscribe />
          </div>
        </div>
      </div>
    </>
  )
}
