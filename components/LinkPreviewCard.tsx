import React from 'react'
import CustomLink from '@/components/Link'

type Props = {
  imageSrc: string
  href: string
  domain: string
  title: string
  description: string
}

export default function LinkPreviewCard({
  href,
  imageSrc,
  domain,
  title,
  description,
}: Props) {
  return (
    <div className="px-1 py-2 sm:px-7">
      <CustomLink
        className="block w-full overflow-hidden rounded-lg border border-neutral-500"
        href={href}
      >
        <img
          className="h-auto w-full border-b border-neutral-500"
          src={imageSrc}
          alt="link preview"
        />
        <div className="flex flex-col gap-1 p-2 text-sm">
          <div className="text-neutral-500">{domain}</div>
          <div className="font-bold">{title}</div>
          <div className="hidden text-neutral-400 sm:block">{description}</div>
        </div>
      </CustomLink>
    </div>
  )
}
