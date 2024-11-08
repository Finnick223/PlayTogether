'use client'

import { DataStructure } from '@/lib/fetch-data'
import { gql, useSuspenseQuery } from '@apollo/client'
import Image from 'next/image'

const querySSR = gql`
  query {
    characters(page: 1, filter: { name: "rick" }) {
      results {
        id
        name
        image
      }
    }
  }
`

export default function ClientPage() {
  const { data }: DataStructure = useSuspenseQuery(querySSR)

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='font-mono text-6xl font-bold'>Morty&apos;s characters</h1>
      <div className='grid grid-cols-3 gap-4 pt-12'>
        {data.characters.results.map(({ id, name, image }) => (
          <div
            key={id}
            className='flex flex-col items-center justify-center space-y-4 rounded-md border border-neutral-200 bg-neutral-100 p-4 shadow dark:border-neutral-800 dark:bg-neutral-900'
          >
            <Image
              className='h-32 w-32 rounded-full'
              src={image}
              alt={name}
              width={128}
              height={128}
            />
            <p className='font-mono text-xl font-medium text-neutral-800 dark:text-neutral-200'>
              {name}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
