// eslint-disable-next-line no-restricted-imports
import React from 'react';

import { cn } from '@/lib/utils';

const TypographyP = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
  ),
);
TypographyP.displayName = 'TypographyP';

const TypographyLarge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('text-lg font-semibold', className)} {...props} />,
);
TypographyLarge.displayName = 'TypographyLarge';

const TypographySmall = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <small ref={ref} className={cn('text-sm font-medium leading-none', className)} {...props} />
  ),
);
TypographySmall.displayName = 'TypographySmall';

const TypographyMuted = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  ),
);
TypographyMuted.displayName = 'TypographyMuted';

export { TypographyLarge, TypographyMuted, TypographyP, TypographySmall };
