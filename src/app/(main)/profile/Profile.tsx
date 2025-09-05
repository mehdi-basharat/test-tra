'use client';
import { useSession } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import useClickEvent from './_usecase/use-click-event';
import { useEffect, useState } from 'react';
import useAmplitudeContext from '@/hooks/use-amplitude';

function ProfilePage() {
  const { data: session, status } = useSession();
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const { trackAmplitudeEvent }: any = useAmplitudeContext();

  const { handleOnSignOut } = useClickEvent();

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  useEffect(() => {
    trackAmplitudeEvent('Profile', {
      ...session?.user,
      ...sessionLocalStorage,
      source: session?.user?.provider ?? 'email',
      status,
    });
  }, [session?.user, sessionLocalStorage, status]);

  if (!(session || sessionLocalStorage)) return null;

  return (
    <div className="flex-1 p-3 sm:p-10">
      <Card className="m-auto rounded-2xl sm:min-w-[30rem] sm:max-w-[35vw] sm:border-gray-100 sm:drop-shadow-md">
        <CardContent className="flex min-w-fit flex-wrap items-center gap-4 p-4 sm:p-7">
          <Avatar className="h-[45px] w-[45px]">
            <AvatarImage
              alt={session?.user?.first_name || sessionLocalStorage?.first_name}
              src={session?.user?.image || sessionLocalStorage?.image}
            />
            <AvatarFallback className="bg-blue-500 capitalize text-white">
              {session?.user?.first_name?.[0] || sessionLocalStorage?.first_name?.[0] || session?.user?.email?.[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col gap-1">
            <div className="text-md font-semibold capitalize sm:text-xl">
              {session?.user?.name || sessionLocalStorage?.first_name || '-'}
            </div>
            <div className="sm:text-md text-sm text-muted-foreground">
              {session?.user?.email || sessionLocalStorage?.email}
            </div>
            <div className="sm:text-md text-sm text-muted-foreground">
              User ID:&nbsp;{session?.user?.user_id ?? sessionLocalStorage?.user_id ?? '-'}
            </div>
          </div>
          <Button className="w-full sm:w-fit" size="sm" onClick={handleOnSignOut}>
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProfilePage;
