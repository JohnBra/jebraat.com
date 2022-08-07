import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'
import { PostMeta } from '@/lib/types'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query?.slug?.toString()


  try {
    if (!slug) throw Error('Slug must be defined')

    if (req.method === 'POST') {
      // function to update a blog_post row to increment the view counter
      const { data, error } = await supabase.rpc<PostMeta>('increment_views', { post_slug: slug })
      if (error) throw error
      return res.status(201).json({
        data
      })
    } else if (req.method === 'GET') {
      const { data, error } = await supabase
        .from<PostMeta>('blog_posts')
        .select('views')
        .eq('slug', slug)
        .single()

      if (error) throw error

      return res.status(200).json({
        views: data.views
      })
    } else {
      return res.status(501).json({ message: 'Not implemented' })
    }
  } catch (e: any) {
    return res.status(500).json({ message: e.message })
  }

}
