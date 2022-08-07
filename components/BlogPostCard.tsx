import cn from 'classnames'
import CustomLink from '@/components/Link'

type Props = {
  title: string;
  slug: string;
  summary: string;
  className?: string;
}

export default function BlogPostCard({ title, slug, summary, className }: Props) {

  return (
    <CustomLink
      href={`/blog/${slug}`}
      className={cn(
        'transform hover:scale-[1.02] sm:hover:scale-[1.07] transition-all duration-200 ease-in-out rounded-md w-full md:w-1/3 border-3 border-sky-500 dark:border-sky-600',
        className
      )}
    >
      <div className="h-full pt-4 pb-6 px-4 sm:p-4">
        <div className="flex flex-col justify-between">
          <h4 className="text-xl font-medium mb-6 sm:mb-10 w-full text-neutral-900 dark:text-neutral-100 tracking-tight">
            {title}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-mono">
            {summary}
          </p>
        </div>
      </div>
    </CustomLink>
  );
}