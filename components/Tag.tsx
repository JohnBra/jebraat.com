import Link from 'next/link'
import GithubSlugger from 'github-slugger'
import { kebabCase } from '@/lib/utils'

type Props = {
  text: string
}

export default function Tag({ text }: Props) {
  return (
    <Link href={`/tags/${GithubSlugger.slug(text)}`}>
      <a className="mr-3 text-xs font-medium uppercase text-primary-500 before:content-['#'] hover:text-primary-600 dark:hover:text-primary-400">
        {kebabCase(text)}
      </a>
    </Link>
  )
}
