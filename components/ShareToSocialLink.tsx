import React from 'react'
import classNames from 'classnames'
import CustomLink, { Props } from '@/components/Link'

export default function ShareToSocialLink({ className, ...rest }: Props) {
  return (
    <CustomLink
      className={classNames(
        'rounded-md p-2 text-neutral-700 transition-all ease-in-out hover:bg-sky-100 hover:text-sky-900 dark:text-neutral-200 dark:hover:bg-gray-700 dark:hover:text-sky-400',
        className,
      )}
      {...rest}
    />
  )
}
