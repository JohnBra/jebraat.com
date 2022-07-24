import ThemeSwitch from '@/components/ThemeSwitch'
import { navLinks } from '@/lib/constants'
import Link from '@/components/Link'
import MobileNav from '@/components/MobileNav'

export default function Navbar() {

  return (
    <div className="flex justify-between items-center py-10">
      <div className="flex items-center">
        <div className="hidden sm:block">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              prefetch={link.prefetch}
              className="py-1 pr-2 font-medium text-gray-900 dark:text-gray-100 sm:py-4 pr-8 hover:text-primary-500 hover:dark:text-primary-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
      <ThemeSwitch />
    </div>
  )
}