import React from 'react'
import classNames from 'classnames'

type Props = {
  shareData: ShareData
} & Omit<React.HTMLProps<HTMLButtonElement>, 'onClick' | 'type'>

/** This will only work with HTTPS */
export default function ShareViaButton({ children, className, shareData, ...rest }: Props) {
  return (
    <button
      onClick={() => navigator.share(shareData)}
      type="button"
      className={classNames(
        'rounded-md p-2 text-left text-neutral-700 dark:text-neutral-200 hover:text-sky-900 hover:bg-sky-100 dark:hover:bg-gray-700 dark:hover:text-sky-400 transition-all ease-in-out',
        className
      )}
      {...rest}
    >
      {children ? children : 'Share via ...'}
    </button>
  )
}