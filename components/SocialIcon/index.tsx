import React from 'react'
import Email from '@/components/SocialIcon/Email'
import Github from '@/components/SocialIcon/Github'
import Twitter from '@/components/SocialIcon/Twitter'
import Instagram from '@/components/SocialIcon/Instagram'
import Youtube from '@/components/SocialIcon/Youtube'
import Twitch from '@/components/SocialIcon/Twitch'
import LinkedIn from '@/components/SocialIcon/LinkedIn'
import { SocialIconKind } from '@/lib/types'

// Icons taken from: https://simpleicons.org/

export const components = {
  email: Email,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  twitch: Twitch,
  linkedin: LinkedIn,
}

type Props = {
  kind: SocialIconKind
  href: string
  /** Tailwind units see: https://tailwindcss.com/docs/width */
  size?: number
}

export default function SocialIcon({ kind, href }: Props) {
  if (
    kind === 'email' &&
    !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)
  )
    throw Error('Please provide a valid email address')

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer nofollow"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`h-6 w-6 fill-current text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200`}
      />
    </a>
  )
}
