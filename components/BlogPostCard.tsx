import cn from 'classnames'
import CustomLink from '@/components/Link'

type Props = {
  title: string
  slug: string
  summary: string
  className?: string
}

export default function BlogPostCard({
  title,
  slug,
  summary,
  className,
}: Props) {
  return (
    <CustomLink
      href={`/blog/${slug}`}
      className={cn(
        'w-full transform rounded-md border-3 border-sky-300 transition-all duration-200 ease-in-out hover:scale-[1.02] hover:border-sky-500 dark:border-sky-700 dark:hover:border-sky-500 sm:hover:scale-[1.07] md:w-1/3',
        className,
      )}
    >
      <div className="h-full px-4 pt-4 pb-6 sm:p-4">
        <div className="h-full flex flex-col justify-between">
          <h4 className="mb-6 w-full text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 sm:mb-10">
            {title}
          </h4>
          <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400">
            {summary}
          </p>
        </div>
      </div>
    </CustomLink>
  )
}
