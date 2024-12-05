import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getSession } from './actions/getSession';

const protectedRoutes = ['/dashboard'];

export default async function middleware(req: NextRequest) {
   const session = await getSession();

   if (!session.isLoggedIn && protectedRoutes.includes(req.nextUrl.pathname)) {
      const absoluteURL = new URL('/login', req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
   }
   if (
      (session.isLoggedIn && req.nextUrl.pathname.startsWith('/login')) ||
      req.nextUrl.pathname.startsWith('/register')
   ) {
      const absoluteURL = new URL('/dashboard', req.nextUrl.origin);

      return NextResponse.redirect(absoluteURL.toString());
   }
   return NextResponse.next();
}
