import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'
import { PostMeta } from '@/lib/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const slug = req.query?.slug?.toString()

  try {
    if (!slug) throw Error('Slug must be defined')

    if (req.method === 'POST') {
      console.log('now incrementing shares')
      // function to update a blog_post row to increment the share counter
      const { data, error } = await supabase.rpc<PostMeta>('increment_shares', {
        post_slug: slug,
      })
      if (error) throw error
      return res.status(201).json({
        data,
      })
    } else {
      return res.status(501).json({ message: 'Not implemented' })
    }
  } catch (e: any) {
    return res.status(500).json({ message: e.message })
  }
}
