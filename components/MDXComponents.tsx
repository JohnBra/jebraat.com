import Link from 'next/link'
import Image from 'next/future/image'
import classNames from 'classnames'
import Subscribe from '@/components/Subscribe'

function CustomLink(props: any) {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function CustomImage({ alt, className, ...rest }: any) {
  return (
    <Image
      alt={alt}
      className={classNames('rounded-sm', className)}
      {...rest}
    />
  )
}

function Highlight({ className, ...rest }: any) {
  return <span className={classNames('text-pink-500', className)} {...rest} />
}

function NewsletterSubscribe() {
  return (
    <div className="not-prose my-20">
      <Subscribe />
    </div>
  )
}

const MDXComponents = {
  a: CustomLink,
  Image: CustomImage,
  Highlight: Highlight,
  NewsletterSubscribe: NewsletterSubscribe,
}

export default MDXComponents
