import { SessionData } from '@/lib/session';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
   const formData = await request.formData();
   const email = formData.get('name');
   const password = formData.get('password');
   console.log(email);
   console.log(password);
   try {
      const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               email: email,
               password: password,
            }),
         },
      );
      if (response.ok) {
         const data = await response.json();
         const session = await getIronSession<SessionData>(await cookies(), {
            password: `${process.env.SESSION_SECRET}`,
            cookieName: 'session',
         });
         session.accessToken = data.accessToken;
         session.isLoggedIn = true;
         await session.save();

         return new Response('Success!', { status: 200 });
      } else {
         return new Response('Invalid credentials', { status: 401 });
      }
   } catch (error) {
      console.log(error);
      return new Response('Internal server error', { status: 500 });
   }
}
