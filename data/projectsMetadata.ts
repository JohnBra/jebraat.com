export type ProjectMetadata = {
  title: string
  summary: string
  image: string
  href: string
}

const projectsMetadata: ProjectMetadata[] = [
  {
    title: 'Shell Buddy',
    summary:
      'A Raycast extension to convert natural language prompts to shell commands with AI.',
    image: '/static/img/projects/shell_buddy_cover.webp',
    href: 'https://getshellbuddy.com',
  },
  {
    title: 'Supatabs',
    summary:
      'A free chrome extension to reduce memory usage and organize your tabs.',
    image: '/static/img/projects/supatabs_cover.webp',
    href: 'https://supatabs.com',
  },
  {
    title: 'ChronoShift',
    summary:
      'Time zone conversion and meeting planning at a glance on any device.',
    image: '/static/img/projects/chronoshift_cover.webp',
    href: 'https://chronoshift.io',
  },
  {
    title: 'My Personal Website',
    summary:
      'This website. Built with Nextjs, TailwindCSS and MDX. Links to the GitHub repo.',
    image: '/static/img/projects/jb_cover.webp',
    href: 'https://github.com/JohnBra/jebraat.com',
  },
  {
    title: 'Chrome Extension Template',
    summary:
      'A browser extension template for Chrome using React, TailwindCSS, TypeScript and Vite.',
    image: '/static/img/projects/extension_template_cover.webp',
    href: 'https://github.com/JohnBra/vite-web-extension',
  },
  {
    title: 'Send URL to Things3',
    summary:
      'A free browser extension to send the current page URL to Things3.',
    image: '/static/img/projects/url_to_things_cover.webp',
    href: 'https://github.com/JohnBra/url-to-things',
  },
]

export default projectsMetadata
