import { SocialIconKind } from '@/lib/types'

export const navLinks = [
  { href: '/', prefetch: false, name: 'Home' },
  { href: '/blog', prefetch: false, name: 'Blog' },
  { href: '/projects', prefetch: false, name: 'Projects' },
  //{ href: '/books', prefetch: false, name: 'Books' },
]

export const socialLinks: { href: string; kind: SocialIconKind }[] = [
  { href: 'https://twitter.com/jebraat', kind: 'twitter' },
  { href: 'https://instagram.com/jebraat', kind: 'instagram' },
  { href: 'https://github.com/JohnBra', kind: 'github' },
  { href: 'https://www.youtube.com/channel/UCSYoM12jgDhSN57CMCqr-ZA', kind: 'youtube' },
  { href: 'https://twitch.tv/johne_labs', kind: 'twitch' },
  { href: 'https://www.linkedin.com/in/jebraat', kind: 'linkedin' },
  { href: 'mailto:contact@spryse.com', kind: 'email' },
]

export const meta = {
  author: 'Jonathan Braat',
}