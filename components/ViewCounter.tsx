import { useEffect } from 'react'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import { PostMeta } from '@/lib/types'

type Props = {
  slug: string;
}

export default function ViewCounter({ slug }: Props) {
  const { data } = useSWR<Pick<PostMeta, 'views'>>(`/api/blog/views/${slug}`, fetcher)
  const views = data?.views

  useEffect(() => {
    const incrementViewCount = () => {
      fetch(`/api/blog/views/${slug}`, {
        method: 'POST'
      }).catch(e => console.warn(e))
    }

    incrementViewCount()
  }, [slug])


  return (
    <span>{views}</span>
  )
}