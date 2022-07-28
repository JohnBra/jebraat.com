import { getAllFilesFrontMatter } from '@/lib/files'
import { GrayMatter } from '@/lib/types'

type Props = {
  projects: GrayMatter[]
}

export default function Blog({ projects }: Props) {
  return (
    <>
      projects
    </>
  )
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects')

  return { props: { projects } }
}