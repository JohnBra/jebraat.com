import React from 'react'

export default function SectionContainer({ children }: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen selection:bg-pink-300 selection:dark:bg-pink-600">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-3xl xl:px-0">
        {children}
      </div>
    </div>
  )
}