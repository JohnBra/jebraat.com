// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query?.slug?.toString()

  console.log('slug', slug)

  try {
    if (req.method === 'POST') {
      // function to update a blog_post row to increment the view counter
      const { data, error } = await supabase.rpc('increment_views', { slug })
      if (error) throw error
      return res.status(201).json({
        data
      })
    } else {
      return res.status(501).json({ message: 'Not implemented' })
    }
  } catch (e: any) {
    return res.status(500).json({ message: e.message })
  }

}
