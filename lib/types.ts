import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type GrayMatter = {
  date: string | null
  slug: string
  [key: string]: any
}

export type Post = {
  html: MDXRemoteSerializeResult<Record<string, unknown>>
  tweetIds: string[]
  frontMatter: GrayMatter
}

export type PostMeta = {
  id: string
  slug: string
  views: number
  likes: number
  shares: number
}

export type SocialIconKind =
  | 'email'
  | 'github'
  | 'youtube'
  | 'twitter'
  | 'instagram'
  | 'twitch'
  | 'linkedin'

export type SocialLink = {
  href: string
  kind: SocialIconKind
  name: string
}

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form
  message?: string
}

export type Subscribers = {
  count: number
}
