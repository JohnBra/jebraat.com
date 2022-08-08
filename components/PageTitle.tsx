import React from 'react'
import cn from 'classnames'

export default function PageTitle({
  children,
  className,
  ...rest
}: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'md:leading-16 mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl',
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  )
}
