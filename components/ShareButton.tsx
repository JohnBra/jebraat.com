import React from 'react'
import classNames from 'classnames'
import CustomLink, { Props } from '@/components/Link'


export default function ShareButton({ className, ...rest }: Props) {
  return (
    <CustomLink
      className={classNames(
        'rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:text-sky-900 hover:bg-sky-100 dark:hover:bg-gray-700 dark:hover:text-sky-400 transition-all ease-in-out',
        className
      )}
      {...rest}
    />
  )
}