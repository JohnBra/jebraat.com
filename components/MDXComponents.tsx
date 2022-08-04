import Link from 'next/link'
import Image from 'next/future/image'
import classNames from 'classnames'

function CustomLink(props: any) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function CustomImage({ alt, className, ...rest }: any) {
  return <Image
    alt={alt}
    className={classNames('rounded-sm', className)}
    {...rest}
  />
}


const MDXComponents = {
  a: CustomLink,
  Image: CustomImage,
}

export default MDXComponents