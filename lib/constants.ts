import { SocialIconKind } from '@/lib/types'

export const navLinks = [
  { href: '/blog', prefetch: false, name: 'Blog' },
  { href: '/projects', prefetch: false, name: 'Projects' },
]

export const socialLinks: { href: string; kind: SocialIconKind }[] = [
  { href: 'https://instagram.com/jebraat', kind: 'instagram' },
  { href: 'https://twitter.com/jebraat', kind: 'twitter' },
  { href: 'https://github.com/JohnBra', kind: 'github' },
  { href: 'mailto:contact@spryse.com', kind: 'email' },
  { href: 'https://www.youtube.com/channel/UCSYoM12jgDhSN57CMCqr-ZA', kind: 'youtube' }
]

export const meta = {
  author: 'Jonathan Braat',
}