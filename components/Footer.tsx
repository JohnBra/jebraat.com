import React from 'react'
import SquigglyLine from '@/components/SquigglyLine'

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
}

export default function Footer() {
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
