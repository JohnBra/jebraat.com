import cn from 'classnames'
import CustomLink from '@/components/Link'

type Props = {
  title: string;
  slug: string;
  className?: string;
}

export default function BlogPostCard({ title, slug, className }: Props) {

  return (
    <CustomLink
      href={`/blog/${slug}`}
      className={cn(
        'transform hover:scale-[1.05] transition-all rounded-xl w-full md:w-1/3 border-4 border-sky-500 dark:border-sky-600',
        className
      )}
    >
      <div className="flex flex-col justify-between h-full bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-neutral-900 dark:text-neutral-100 tracking-tight">
            {title}
          </h4>
        </div>
      </div>
    </CustomLink>
  );
}