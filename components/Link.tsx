import React from 'react'
import Link from 'next/link'

type Props = {
  prefetch?: boolean
} & React.HTMLProps<HTMLAnchorElement>

export default function CustomLink({
  prefetch,
  href,
  rel = 'noopener noreferrer',
  ...rest
}: Props) {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href} prefetch={prefetch}>
        <a {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  // eslint-disable-next-line react/jsx-no-target-blank
  return <a target="_blank" rel={rel} href={href} {...rest} />
}
