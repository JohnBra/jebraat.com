import CustomLink from '@/components/Link'
import Image from 'next/future/image'
import React from 'react'

const projects: any[] = [
  { title: 'Supatabs', summary: 'bla bla bla', image: '' },
  { title: 'ChronoShift', summary: 'bla bla bla', image: '' },
];


export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 min-h-90">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
        </div>

        <div className="grid gap-8 grid-cols-1 py-12 md:grid-cols-2">
          {projects.map((project, index) =>
            <div
              key={index}
              className="group w-full bg-day dark:bg-night bg-opacity-50 dark:bg-opacity-50"
            >
              <CustomLink className="cursor-pointer c-card block bg-transparent rounded-lg overflow-hidden transform transition duration-500 group-hover:scale-105">
                <div className="relative pb-60 max-h-4 rounded-lg overflow-hidden">
                  <Image
                    src={'https://images.unsplash.com/photo-1659017472248-0fd786d28b49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'}
                    width={0}
                    height={0}
                    className="absolute inset-0 h-full w-full opacity-80 dark:opacity-70 object-cover transform transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                </div>
                <div className="py-4">
                  {/* Card Title */}
                  <h2 className="mt-2 mb-2 md:text-xl font-bold">
                    The Build Series: E6 — Fun with Flags
                  </h2>
                  {/* Summary Title */}
                  <p>
                    Lorem ipsum dolor
                  </p>
                </div>
              </CustomLink>
            </div>
          )}
        </div>
      </div>
    </>
  )
}