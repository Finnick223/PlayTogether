import { Button } from '@/components/ui/button'
import {
  Link,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu'
import { Menu } from 'lucide-react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ReactNode } from 'react'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'PlayTogether',
  description: 'App for finding players',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationMenu className='flex w-screen justify-center bg-zinc-700 px-6 py-3'>
          <Button className='mr-auto hidden sm:block' size={'icon'}>
            PT
          </Button>

          {/* mobile view */}
          <NavigationMenuList className='sm:hidden'>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Menu className='mt-1' />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='flex-row p-4'>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href='/docs'
                        className={
                          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                        }
                      >
                        <div className='text-sm font-medium leading-none'>
                          Play
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href='/docs'
                        className={
                          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                        }
                      >
                        <div className='text-sm font-medium leading-none'>
                          Discover
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href='/docs'
                        className={
                          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                        }
                      >
                        <div className='text-sm font-medium leading-none'>
                          Gallery
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href='/docs'
                        className={
                          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                        }
                      >
                        <div className='text-sm font-medium leading-none'>
                          Updates
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>

          {/* tablet and pc breakpoint */}
          <NavigationMenuList className='hidden sm:flex sm:flex-row md:space-x-8'>
            <NavigationMenuItem>
              <Link href='/'>
                <NavigationMenuLink asChild>
                  <Button variant={'ghost'}>Play</Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/'>
                <NavigationMenuLink asChild>
                  <Button variant={'ghost'}>Discover</Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/'>
                <NavigationMenuLink asChild>
                  <Button variant={'ghost'}>Gallery</Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/'>
                <NavigationMenuLink asChild>
                  <Button variant={'ghost'}>Updates</Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <Button variant={'outline'} className='ml-auto'>
            Login
          </Button>
        </NavigationMenu>
        {children}
        <footer className='flex w-screen justify-center bg-zinc-700 px-6 py-3'>
          footer
        </footer>
      </body>
    </html>
  )
}
