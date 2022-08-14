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
  const shortSummary = summary.length >= 123 ? summary.slice(0, 123) + '...' : summary
  return (
    <CustomLink
      href={`/blog/${slug}`}
      className={cn(
        'w-full transform rounded-md border-3 border-primary-400 transition-all duration-200 ease-in-out hover:scale-[1.02] hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-300 dark:border-primary-700 dark:hover:border-primary-500 dark:hover:shadow-primary-700 sm:hover:scale-[1.07] md:w-1/3',
        className,
      )}
    >
      <div className="h-full px-4 pt-4 pb-6 sm:p-4">
        <div className="flex h-full flex-col justify-between">
          <h4 className="mb-6 w-full text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 sm:mb-10">
            {title}
          </h4>
          <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400">
            {shortSummary}
          </p>
        </div>
      </div>
    </CustomLink>
  )
}
