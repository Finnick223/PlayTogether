import { Button } from '@/components/ui/button';
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({
   children,
}: Readonly<{
   children: ReactNode;
}>) {
   return (
      <>
         <NavigationMenu className='flex w-screen justify-center bg-zinc-500 px-6 py-3'>
            <Button className='mr-auto hidden sm:block' size={'icon'}>
               PT
            </Button>

            {/* mobile view */}
            <NavigationMenuList className='sm:hidden'>
               <NavigationMenuItem>
                  <NavigationMenuTrigger className='bg-primary'>
                     <Menu className='mt-1' color='#ffffff' />
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
            <NavigationMenuList className='hidden sm:flex sm:flex-row md:space-x-8 lg:space-x-24'>
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
            <Button asChild className='ml-auto'>
               <Link href='/login'>Login</Link>
            </Button>
         </NavigationMenu>
         {children}
      </>
   );
}
