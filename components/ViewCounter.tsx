import { useEffect } from 'react'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

type Props = {
  slug: string;
}

export default function ViewCounter({ slug }: Props) {
  const { data } = useSWR<any>(`/api/blog/views/${slug}`, fetcher)
  const views = data?.views

  useEffect(() => {
    const incrementViewCount = () => {
      fetch(`/api/blog/views/${slug}`, {
        method: 'POST'
      })
    }

    console.log('incremented')
    incrementViewCount()
  }, [slug])


  return (
    <span>{views}</span>
  )
}