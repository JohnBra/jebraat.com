import React from 'react'
import { useState, useRef, FormEvent } from 'react'
import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import { Form, FormState, Subscribers } from 'lib/types'
import SuccessMessage from 'components/SuccessMessage'
import ErrorMessage from 'components/ErrorMessage'
import LoadingSpinner from 'components/LoadingSpinner'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/Link'

export default function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial })
  const ref = useRef<HTMLInputElement>(null)
  const { data } = useSWR<Subscribers>('/api/newsletter/subscribers', fetcher)
  const subscriberCount = Number(data?.count)

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (ref?.current) {
      setForm({ state: Form.Loading })

      const email = ref.current.value
      const res = await fetch(`/api/newsletter/subscribers?email=${email}`, {
        method: 'POST'
      })

      const { error } = await res.json()
      if (error) {
        setForm({
          state: Form.Error,
          message: error
        })
        return
      }

      ref.current.value = ''
      setForm({
        state: Form.Success,
        message: `Hooray! You're now on the list.`
      })
    }
  }

  return (
    <div className="border border-blue-200 rounded-md p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-gray-800">
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Subscribe to the newsletter
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Get emails from me about tech, travel and personal development.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={ref}
          aria-label="Email for newsletter"
          placeholder="mybest@email.com"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-32"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {`${
            subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
          } subscribers – `}
          <CustomLink href={siteMetadata.revue}>
            View all issues
          </CustomLink>
        </p>
      )}
    </div>
  );
}