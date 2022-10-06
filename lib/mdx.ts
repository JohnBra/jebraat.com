import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkFootnotes from 'remark-footnotes'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import rehypeKatex from 'rehype-katex'
import rehypeCitation from 'rehype-citation'

export async function mdxToHtml(source: string) {
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath, remarkFootnotes],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        rehypeKatex,
        rehypeCitation,
        [
          rehypeAutolinkHeadings,
          {
            behaviour: 'append',
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'mdx',
    },
  })

  // this here is omega hacky, don't try it at home kids
  // first step match all StaticTweet elements in MDX where id follows this exact element
  const tweetMatches = source.match(/<StaticTweet\s*id="\d+"/g)
  // second step extract all ids from previously matched static tweet occurrences in mdx
  const tweetIds: (string | undefined)[] =
    tweetMatches?.map((tweet) => tweet.match(/\d+/g)?.[0]) ?? []

  return {
    html: mdxSource,
    tweetIds: tweetIds.filter((t) => t) as string[],
    wordCount: source.split(/\s+/gu).length,
    readingTime: readingTime(source).text,
  }
}
