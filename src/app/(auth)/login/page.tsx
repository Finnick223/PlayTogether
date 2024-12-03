import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Home() {
   return (
      <div className='mt-10 flex min-h-screen items-start justify-center p-20 font-[family-name:var(--font-geist-sans)]'>
         <form className='flex flex-col items-center gap-8'>
            <span className='text-3xl'>Login</span>
            <div className='flex flex-col gap-4 sm:flex-row'>
               <div className='flex flex-col gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input type='text' placeholder='JaneSmith@example.com' />
               </div>
               <div className='flex flex-col gap-2'>
                  <Label htmlFor='password'>Password</Label>
                  <Input type='password' placeholder='password' />
               </div>
            </div>
            <Button size={'lg'} type='submit'>
               Login
            </Button>
         </form>
      </div>
   );
}
