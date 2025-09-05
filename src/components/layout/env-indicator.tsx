import { APP_ENV } from '@/constants';

import { cn } from '@/lib/utils';

const EnvironmentIndicator = () => {
  const env = APP_ENV;

  if (!env) return null;

  const envStyles: Record<string, string> = { local: 'bg-blue-500', staging: 'bg-red-500', beta: 'bg-orange-500' };

  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-[999] rounded-br-lg px-4 text-xs capitalize text-white shadow-2xl',
        envStyles[env] ?? '',
      )}
    >
      {env}
    </div>
  );
};

export default EnvironmentIndicator;
