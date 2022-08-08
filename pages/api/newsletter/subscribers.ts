import { type NextRequest } from 'next/server'
import { getSubscriberCount, subscribe } from '@/lib/revue'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  if (req.method === 'POST') {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')

    return await subscribe(email)
  } else if (req.method === 'GET') {
    return await getSubscriberCount()
  } else {
    return new Response(JSON.stringify({ message: 'Not implemented.' }), {
      status: 501,
      headers: {
        'content-type': 'application/json',
      },
    })
  }
}
