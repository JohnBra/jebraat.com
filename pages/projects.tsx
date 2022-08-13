import CustomLink from '@/components/Link'
import Image from 'next/future/image'
import React from 'react'
import { PageSEO } from '@/components/SEO'
import SquigglyLine from '@/components/SquigglyLine'

// TODO move to site data
const projects: any[] = [
  {
    title: 'Supatabs',
    summary:
      'A free chrome extension to reduce memory usage and organize your tabs.',
    image: '/static/img/projects/supatabs_cover.webp',
    href: 'https://supatabs.com',
  },
  {
    title: 'ChronoShift',
    summary: 'Time zone conversion and meeting planning at a glance on any device',
    image: '/static/img/projects/chronoshift_cover.webp',
    href: 'https://chronoshift.io',
  },
  {
    title: 'My Personal Website',
    summary: 'My personal website built with Nextjs, TailwindCSS and MDX.',
    image: '/static/img/projects/jb_cover.webp',
    href: 'https://github.com/JohnBra/jebraat.com',
  },
]

export default function Projects() {
  return (
    <>
      <PageSEO
        title="Projects - John Braat"
        description="I build software in my spare time. Most of them will be SaaS projects or small apps."
      />
      <div className="min-h-90">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
            Projects
          </h1>
          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            I absolutely love building things. Check out some of my projects
            below to see what I&apos;m working on.
          </p>
        </div>

        <SquigglyLine className="my-3" />

        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-day dark:bg-night group w-full bg-opacity-50 dark:bg-opacity-50"
            >
              <CustomLink
                className="c-card block transform cursor-pointer overflow-hidden rounded-lg bg-transparent transition duration-500 group-hover:scale-105"
                href={project.href}
                rel="noopener"
              >
                <div className="relative max-h-4 overflow-hidden rounded-lg pb-60">
                  <Image
                    src={project.image}
                    width={0}
                    height={0}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full transform object-cover opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-100 dark:opacity-90"
                  />
                </div>
                <div className="py-4">
                  <h2 className="mt-2 mb-2 font-bold md:text-xl">
                    {project.title}
                  </h2>
                  <p>{project.summary}</p>
                </div>
              </CustomLink>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
