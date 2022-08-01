import CustomLink from '@/components/Link'
import Image from 'next/future/image'
import React from 'react'
import { PageSEO } from '@/components/SEO'

// TODO move to site data
const projects: any[] = [
  {
    title: 'Supatabs',
    summary: 'A chrome extension to reduce memory usage and organize your tabs.',
    image: '/static/img/projects/supatabs_cover.webp',
    href: 'https://supatabs.com'
  },
  {
    title: 'ChronoShift',
    summary: 'Time zone conversion at a glance on any device',
    image: '/static/img/projects/chronoshift_cover.webp',
    href: 'https://chronoshift.io'
  },
];


export default function Projects() {
  return (
    <>
      <PageSEO
        title="Projects - John Braat"
        description="I build software in my spare time. Most of them will be SaaS projects or small apps."
      />
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
              <CustomLink
                className="cursor-pointer c-card block bg-transparent rounded-lg overflow-hidden transform transition duration-500 group-hover:scale-105"
                href={project.href}
                rel="noopener"
              >
                <div className="relative pb-60 max-h-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    width={0}
                    height={0}
                    className="absolute inset-0 h-full w-full opacity-90 dark:opacity-90 object-cover transform transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                </div>
                <div className="py-4">
                  <h2 className="mt-2 mb-2 md:text-xl font-bold">
                    {project.title}
                  </h2>
                  <p>
                    {project.summary}
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