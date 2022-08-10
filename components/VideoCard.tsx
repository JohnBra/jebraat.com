import classNames from 'classnames'
import CustomLink from '@/components/Link'

type Props = {
  href: string
  length: string
  title: string
  index: number
  className?: string
}

export default function VideoCard({
  href,
  length,
  title,
  index,
  className,
}: Props) {
  return (
    <CustomLink
      className="w-full"
      href={href}
      aria-label={title}
      target="_blank"
    >
      <div
        className={classNames(
          'w-full transform border-b border-neutral-200 py-3 transition-all hover:scale-[1.01] dark:border-neutral-700',
          className,
        )}
      >
        <div className="flex flex-col items-baseline justify-between sm:flex-row">
          <div className="flex items-center">
            <div className="mr-6 text-left text-gray-500 dark:text-gray-400">
              {index}
            </div>
            <h4 className="w-full text-lg font-medium text-gray-800 dark:text-gray-100">
              {title}
            </h4>
          </div>
          <div className="mt-2 flex w-full items-center justify-between sm:mt-0 sm:w-auto">
            <p className="mr-2 ml-10 w-32 text-left text-gray-500 dark:text-gray-400 sm:ml-0 sm:text-right md:mb-0">
              {length}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 dark:text-gray-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </CustomLink>
  )
}
