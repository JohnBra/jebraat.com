import { SocialLink } from '@/lib/types'
import siteMetadata from '@/data/siteMetadata'

export const navLinks = [
  { href: '/', prefetch: undefined, name: 'Home' },
  { href: '/blog', prefetch: false, name: 'Blog' },
  { href: '/projects', prefetch: false, name: 'Projects' },
  //{ href: '/books', prefetch: false, name: 'Books' },
]

export const socialLinks: SocialLink[] = [
  { href: siteMetadata.twitter, kind: 'twitter', name: 'Twitter' },
  { href: siteMetadata.github, kind: 'github', name: 'Github' },
  { href: siteMetadata.instagram, kind: 'instagram', name: 'Instagram' },
  { href: siteMetadata.youtube, kind: 'youtube', name: 'YouTube' },
  { href: siteMetadata.twitch, kind: 'twitch', name: 'Twitch' },
  { href: siteMetadata.linkedin, kind: 'linkedin', name: 'LinkedIn' },
  { href: `mailto:${siteMetadata.email}`, kind: 'email', name: 'Email' },
]
