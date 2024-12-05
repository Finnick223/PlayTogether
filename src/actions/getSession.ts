'use server';

import { SessionData, sessionOptions } from '@/lib/session';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

export async function getSession() {
   const session = await getIronSession<SessionData>(
      await cookies(),
      sessionOptions,
   );
   if (!session.isLoggedIn) {
      session.isLoggedIn = false;
   }

   return {
      accessToken: session.accessToken || null,
      isLoggedIn: session.isLoggedIn || false,
   };
}
