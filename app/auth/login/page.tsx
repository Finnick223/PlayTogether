import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='mt-10 flex min-h-screen items-start justify-center font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <main className='flex flex-col items-center gap-8'>
        <span className='text-3xl'>Login page</span>
        <div className='flex flex-row gap-4'>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' placeholder='JaneSmith@example.com' />
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input type='password' placeholder='password' />
          </div>
        </div>
        <Button variant={'outline'} size={'lg'} className='w-full'>
          Login
        </Button>
        <Link href={'/auth/register'}>Dont have account? Register now</Link>
      </main>
    </div>
  )
}
