import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Home() {
   return (
      <div className='mt-10 flex min-h-screen items-start justify-center font-[family-name:var(--font-geist-sans)] sm:p-20'>
         <main className='flex flex-col items-center gap-6'>
            <span className='text-3xl'>Register page</span>

            <div className='flex flex-col gap-4 sm:flex-row'>
               <div className='flex flex-col gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input type='email' placeholder='JaneSmith@example.com' />
               </div>
               <div className='flex flex-col gap-2'>
                  <Label htmlFor='nickname'>nickname</Label>
                  <Input type='text' name='nickname' placeholder='JaneSmith' />
               </div>
            </div>

            <div className='flex flex-col gap-4 sm:flex-row'>
               <div className='flex flex-col gap-2'>
                  <Label htmlFor='password'>password</Label>
                  <Input type='password' placeholder='password' />
               </div>
               <div className='flex flex-col gap-2'>
                  <Label htmlFor='repassword'>repassword</Label>
                  <Input
                     type='password'
                     name='repassword'
                     placeholder='password'
                  />
               </div>
            </div>
            <Button size={'lg'} className='w-full'>
               Register
            </Button>
         </main>
      </div>
   );
}
