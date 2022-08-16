import React from 'react'
import SquigglyLine from '@/components/SquigglyLine'
import CustomLink from '@/components/Link'
import { navLinks, socialLinks } from '@/lib/constants'

const navigation = {
  nav: navLinks,
  socials: socialLinks.filter((sl) =>
    ['github', 'twitter', 'linkedin', 'instagram'].includes(sl.kind),
  ),
  watch: socialLinks.filter((sl) => ['youtube', 'twitch'].includes(sl.kind)),
  other: [
    { name: 'Links', href: '/links' },
    { name: 'Tags', href: '/tags' },
  ],
}

export default function Footer() {
  return (
    <footer
      className="overflow-hidden py-12 px-4 sm:px-0"
      aria-labelledby="footer-heading"
    >
      <SquigglyLine className="my-8" />
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="grid grid-cols-2 gap-8 xl:col-span-3">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Navigation
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              {navigation.nav.map((item) => (
                <li key={item.name}>
                  <CustomLink
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-100"
                    href={item.href}
                    prefetch={item.prefetch}
                  >
                    {item.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Other
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              {navigation.other.map((item) => (
                <li key={item.name}>
                  <CustomLink
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-100"
                    href={item.href}
                    prefetch={false}
                  >
                    {item.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Socials
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              {navigation.socials.map((item) => (
                <li key={item.kind}>
                  <CustomLink
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-100"
                    href={item.href}
                  >
                    {item.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Watch
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              {navigation.watch.map((item) => (
                <li key={item.kind}>
                  <CustomLink
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-100"
                    href={item.href}
                  >
                    {item.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-10 md:flex md:items-center md:justify-between">
        <p className="mt-10 text-base text-gray-400 md:mt-0">
          &copy; {` ${new Date().getFullYear()} `} Spryse Limited&trade;. All
          rights reserved.
        </p>
        <p className="mt-1 text-base text-gray-400 md:order-1 md:mt-0">
          Developed by Jonathan Braat
        </p>
      </div>
    </footer>
  )
}
