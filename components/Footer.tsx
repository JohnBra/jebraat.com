import React from 'react'
import SocialIcon from '@/components/SocialIcon'
import { navLinks, socialLinks } from '@/lib/constants'
import SquigglyLine from '@/components/SquigglyLine'

/*
const navigation = {
  main: navLinks,
  social: socialLinks,
}

export default function Footer({ className, ...rest }: React.HTMLProps<HTMLElement>) {
  return (
    <footer className={className} {...rest}>
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 hover:dark:text-gray-100">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <SocialIcon key={item.kind} kind={item.kind} href={item.href} />
          ))}
        </div>
        <div className="flex flex-col mt-8 text-center text-base text-gray-500 dark:text-gray-400">
          <span>&copy; {` ${new Date().getFullYear()} `} Spryse Limited&trade;. All rights reserved.</span>
          <span>Developed by Jonathan Braat</span>
        </div>
      </div>
    </footer>
  )
}
*/
const navigation = {
  solutions: [
    { name: 'Blog', href: '#' },
    { name: 'Tags', href: '#' },
    { name: 'Projects', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  social: socialLinks
}

export default function Example() {
  return (
    <footer className="py-12 px-4 overflow-hidden sm:px-0" aria-labelledby="footer-heading">
      <SquigglyLine className="my-8"/>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="grid grid-cols-2 gap-8 xl:col-span-3">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase">Navigation</h3>
            <ul role="list" className="mt-4 space-y-4">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-100">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase">Socials</h3>
            <ul role="list" className="mt-4 space-y-4">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-100">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase">Other</h3>
            <ul role="list" className="mt-4 space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-100">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-8 md:flex md:items-center md:justify-between">
        <p className="mt-8 text-base text-gray-400 md:mt-0">
          &copy; {` ${new Date().getFullYear()} `} Spryse Limited&trade;. All rights reserved.
        </p>
        <p className="mt-1 text-base text-gray-400 md:mt-0 md:order-1">
          Developed by Jonathan Braat
        </p>
      </div>
    </footer>
  )
}
