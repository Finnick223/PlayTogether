import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
   title: 'PlayTogether',
   description: 'App for finding players',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: ReactNode;
}>) {
   return (
      <html lang='en'>
         <body className={`antialiased`}>
            <main>{children}</main>
            <footer className='flex w-screen justify-center bg-zinc-700 py-3'>
               footer
            </footer>
         </body>
      </html>
   );
}
