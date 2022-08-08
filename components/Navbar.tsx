import { useRouter } from 'next/router'
import cn from 'classnames'
import ThemeSwitch from '@/components/ThemeSwitch'
import { navLinks } from '@/lib/constants'
import Link from '@/components/Link'
import MobileNav from '@/components/MobileNav'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="flex items-center justify-between pt-10 pb-16">
      <div className="flex items-center">
        <div className="hidden sm:block">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              prefetch={link.prefetch}
              className={cn(
                'py-1 pr-8 font-medium text-gray-900 transition-all ease-in-out hover:text-primary-500 dark:text-gray-100 hover:dark:text-primary-500 sm:py-4',
                router.asPath === link.href
                  ? 'text-primary-500 dark:text-primary-500'
                  : null,
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
