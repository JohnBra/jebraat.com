import ThemeSwitch from '@/components/ThemeSwitch'
import { navLinks } from '@/lib/constants'
import Link from '@/components/Link'
import MobileNav from '@/components/MobileNav'

export default function Navbar() {

  return (
    <div className="flex justify-between items-center py-10">
      <div className="flex">
        <div>logo</div>
        <div>Jonathan Braat</div>
      </div>
      <div className="flex items-center">
        <div className="hidden sm:block">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              prefetch={link.prefetch}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </div>
  )
}