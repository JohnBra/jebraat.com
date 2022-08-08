export async function getSubscriberCount() {
  const result = await fetch('https://www.getrevue.co/api/v2/subscribers', {
    method: 'GET',
    headers: {
      Authorization: `Token ${process.env.REVUE_API_KEY}`,
    },
  })

  const data = await result.json()

  if (!result.ok) {
    return new Response(
      JSON.stringify({ message: 'Error retrieving subscribers' }),
      {
        status: 500,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }

  return new Response(JSON.stringify({ count: data.length }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  })
}

export async function subscribe(email: string | undefined | null) {
  if (!email) {
    return new Response(
      JSON.stringify({
        message: 'Email is required',
      }),
      {
        status: 400,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }

  const result = await fetch('https://www.getrevue.co/api/v2/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REVUE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  const data = await result.json()

  if (!result.ok) {
    return new Response(
      JSON.stringify({
        message: data.error.email[0],
      }),
      {
        status: 500,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }

  return new Response(
    JSON.stringify({
      message: '',
    }),
    {
      status: 201,
      headers: {
        'content-type': 'application/json',
      },
    },
  )
}
