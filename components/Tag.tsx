import Link from 'next/link'
import GithubSlugger from 'github-slugger'

type Props = {
  text: string;
}

export default function Tag({ text }: Props) {
  return (
    <Link href={`/tags/${GithubSlugger.slug(text)}`}>
      <a className="mr-3 text-xs font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 before:content-['#']">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}
