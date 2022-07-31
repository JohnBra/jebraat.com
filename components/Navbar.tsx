import { useRouter } from 'next/router'
import cn from 'classnames'
import ThemeSwitch from '@/components/ThemeSwitch'
import { navLinks } from '@/lib/constants'
import Link from '@/components/Link'
import MobileNav from '@/components/MobileNav'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="flex justify-between items-center pt-10 pb-16">
      <div className="flex items-center">
        <div className="hidden sm:block">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              prefetch={link.prefetch}
              className={cn(
                'py-1 font-medium text-gray-900 dark:text-gray-100 sm:py-4 pr-8 hover:text-primary-500 hover:dark:text-primary-500 transition-all ease-in-out',
                router.asPath === link.href ? 'text-primary-500 dark:text-primary-500' : null
              )}
                >
                {link.name} {router.asPath === link.href ? <>&darr;</> : null}
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
      <ThemeSwitch />
    </nav>
  )
}