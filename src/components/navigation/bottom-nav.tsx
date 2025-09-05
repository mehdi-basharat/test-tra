'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaFire } from 'react-icons/fa';
import { IoGift } from 'react-icons/io5';

// import { IoGameController, IoGift, IoNewspaperSharp } from 'react-icons/io5';
import { cn } from '@/lib/utils';

const BottomNav = () => {
  const pathname = usePathname();
  const menus = [
    // {
    //   icon: IoGameController,
    //   name: 'Game',
    //   href: '/a',
    // },
    {
      icon: FaFire,
      name: 'Offers',
      href: '/offerwall',
    },
    // {
    //   icon: IoNewspaperSharp,
    //   name: 'News',
    //   href: '/news',
    // },
    {
      icon: IoGift,
      name: 'Redeem',
      href: '/redeem',
    },
  ];

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 h-[4rem] w-full border-t border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700 lg:hidden">
        {/* <div className="w-full">
        <div
          className="mx-auto my-2 grid max-w-xs grid-cols-3 gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-600"
          role="group"
        >
          <button
            className="rounded-lg px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
            type="button"
          >
            New
          </button>
          <button
            className="rounded-lg bg-gray-900 px-5 py-1.5 text-xs font-medium text-white dark:bg-gray-300 dark:text-gray-900"
            type="button"
          >
            Popular
          </button>
          <button
            className="rounded-lg px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
            type="button"
          >
            Following
          </button>
        </div>
      </div> */}
        <div className="mx-auto grid h-full max-w-lg grid-cols-2">
          {menus.map(menu => {
            return (
              <Link
                key={menu.name}
                className={cn(
                  'group flex flex-col items-center justify-start p-4 text-center hover:bg-gray-50 dark:hover:bg-gray-800',
                  menu.href === pathname && 'text-primary',
                )}
                href={menu.href}
              >
                <menu.icon className={cn(menu.href === pathname && 'text-primary')} size={24} />
                <span className={cn('text-sm', menu.href === pathname && 'text-primary')}>{menu.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="min-h-[4rem] lg:hidden" />
    </>
  );
};

export default BottomNav;
