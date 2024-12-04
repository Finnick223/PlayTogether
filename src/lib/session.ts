import { SessionOptions } from 'iron-session';

export interface SessionData {
   accessToken: string;
   isLoggedIn: boolean;
}

export const sessionOptions: SessionOptions = {
   password:
      process.env.SESSION_SECRET ||
      'k/HSi1UWIZUWETtj03HPobhwrj8s+lIspJcG3NZrC+M=',
   cookieName: 'session',
   cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
   },
};
