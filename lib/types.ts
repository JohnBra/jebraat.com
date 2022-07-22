import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type GrayMatter = {
  date: string | null;
  slug: string;
  [key: string]: any;
}

export type Post = {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  toc: any;
  frontMatter: GrayMatter;
}