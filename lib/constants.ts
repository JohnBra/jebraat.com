import { SocialIconKind } from '@/lib/types'
import siteMetadata from '@/data/siteMetadata'

export const navLinks = [
  { href: '/', prefetch: false, name: 'Home' },
  { href: '/blog', prefetch: false, name: 'Blog' },
  { href: '/projects', prefetch: false, name: 'Projects' },
  //{ href: '/books', prefetch: false, name: 'Books' },
]

export const socialLinks: { href: string; kind: SocialIconKind, top: boolean }[] = [
  { href: siteMetadata.twitter, kind: 'twitter', top: true },
  { href: siteMetadata.github, kind: 'github', top: true },
  { href: siteMetadata.instagram, kind: 'instagram', top: true },
  { href: siteMetadata.youtube, kind: 'youtube', top: false },
  { href: siteMetadata.twitch, kind: 'twitch', top: false },
  { href: siteMetadata.linkedin, kind: 'linkedin', top: true },
  { href: `mailto:${siteMetadata.email}`, kind: 'email', top: false },
]
