import { queryRSC } from '@/lib/fetch-data'
import Image from 'next/image'

export default async function Home() {
  const characters = await queryRSC()

  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center gap-16 p-8 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      {/* Header */}
      <header className='flex items-center justify-center'>
        <h1 className='font-mono text-6xl font-bold'>
          Morty&apos;s characters
        </h1>
      </header>

      {/* Main content */}
      <main className='flex w-full flex-col items-center justify-center'>
        <div className='grid grid-cols-3 gap-4'>
          {characters.map(({ id, name, image }) => (
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
    </div>
  )
}
