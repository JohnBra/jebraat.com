import React from 'react'
import classNames from 'classnames'

type Props = {
  shareData: ShareData
  onClick?: () => void
} & Omit<React.HTMLProps<HTMLButtonElement>, 'onClick' | 'type'>

/** This will only work with HTTPS */
export default function ShareViaButton({
  children,
  className,
  shareData,
  onClick,
  ...rest
}: Props) {
  return (
    <button
      onClick={() => {
        navigator.share(shareData).catch((e) => console.warn(e))
        if (onClick) onClick()
      }}
      type="button"
      className={classNames(
        'rounded-md p-2 text-left text-neutral-700 transition-all ease-in-out hover:bg-primary-100 hover:text-primary-900 dark:text-neutral-200 dark:hover:bg-gray-700 dark:hover:text-primary-400',
        className,
      )}
      {...rest}
    >
      {children ? children : 'Share via ...'}
    </button>
  )
}
