'use client';
import { useRouter } from 'next/navigation';

import { useSession } from 'next-auth/react';

import { UserCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { TypographyMuted, TypographyP } from '@/components/ui/typography';

import useSignOut from '@/hooks/use-signout';
import { useEffect, useState } from 'react';

const Header = () => {
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const router = useRouter();
  const { data: session, status } = useSession();
  const { handleOnSignOut } = useSignOut({ options: { redirect: false } });

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  if (status === 'loading') return null;

  return (
    <div className="h-16 self-end">
      {status === 'authenticated' ? (
        <Popover>
          <PopoverTrigger>
            <UserCircle size={28} />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-1">
            <TypographyP>{session?.user?.name || sessionLocalStorage?.name}</TypographyP>
            <TypographyMuted>{session.user.email}</TypographyMuted>
            {(session?.user?.user_id || sessionLocalStorage?.user_id) && (
              <TypographyMuted> {`User ID ${session?.user?.user_id || sessionLocalStorage?.user_id}`}</TypographyMuted>
            )}
            <Button className="mt-2 w-full" variant="outline" onClick={handleOnSignOut}>
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button className="text-primary" variant="outline" onClick={() => router.push('/login')}>
          Sign In / Sign Up
        </Button>
      )}
    </div>
  );
};

export default Header;
