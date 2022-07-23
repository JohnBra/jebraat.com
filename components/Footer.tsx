import SocialIcon from '@/components/SocialIcon'
import { navLinks, socialLinks } from '@/lib/constants'

const navigation = {
  main: navLinks,
  social: socialLinks,
}

export default function Footer() {
  return (
    <footer>
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
        <p className="mt-8 text-center text-base text-gray-500 dark:text-gray-400">
          &copy; {` ${new Date().getFullYear()} `} Spryse Limited&trade;. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
