'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState<string | null>(null);
   const router = useRouter();

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);

      try {
         const response = await fetch('/api/login', {
            method: 'POST',
            body: new FormData(e.currentTarget),
         });

         if (response.ok) {
            router.push('/dashboard');
         } else {
            const message = await response.text();
            setError(message || 'Invalid credentials');
         }
      } catch (error) {
         console.error('Login error:', error);
         setError('Something went wrong. Please try again.');
      }
   };

   return (
      <form
         className='flex flex-col items-center gap-8'
         onSubmit={handleSubmit}
      >
         <span className='text-3xl'>Login</span>
         <div className='flex flex-col gap-4 sm:flex-row'>
            <div className='flex flex-col gap-2'>
               <Label htmlFor='email'>Email</Label>
               <Input
                  id='email'
                  name='name'
                  type='text'
                  placeholder='JaneSmith@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
            </div>
            <div className='flex flex-col gap-2'>
               <Label htmlFor='password'>Password</Label>
               <Input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
               />
            </div>
         </div>
         {error && <p className='text-red-500'>{error}</p>}
         <Button size='lg' type='submit'>
            Login
         </Button>
      </form>
   );
}
