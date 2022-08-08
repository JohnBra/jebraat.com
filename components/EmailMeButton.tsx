import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import classNames from 'classnames'

export default function EmailMeButton({
  className,
  children,
  ...rest
}: Omit<React.HTMLProps<HTMLAnchorElement>, 'href'>) {
  return (
    <a
      className={classNames(
        'border border-neutral-300 bg-neutral-100 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800',
        'hover:border-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-300 dark:hover:text-neutral-300',
        'rounded-3xl px-3 py-1 font-mono text-xs font-semibold',
        className,
      )}
      href={`mailto:${siteMetadata.email}`}
      {...rest}
    >
      {children ? children : 'Email me'}
    </a>
  )
}
