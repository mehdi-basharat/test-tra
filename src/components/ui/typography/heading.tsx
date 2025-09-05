// eslint-disable-next-line no-restricted-imports
import React from 'react';

import { cn } from '@/lib/utils';

const TypographyH1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
      {...props}
    />
  ),
);
TypographyH1.displayName = 'TypographyH1';

const TypographyH2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn('scroll-m-20 text-3xl font-semibold tracking-tight', className)} {...props} />
  ),
);
TypographyH2.displayName = 'TypographyH2';

const TypographyH3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props} />
  ),
);
TypographyH3.displayName = 'TypographyH3';

const TypographyH4 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h4 ref={ref} className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props} />
  ),
);
TypographyH4.displayName = 'TypographyH4';

const TypographyH5 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('text-md scroll-m-20 font-semibold tracking-tight', className)} {...props} />
  ),
);
TypographyH5.displayName = 'TypographyH4';

const TypographyH6 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h6 ref={ref} className={cn('scroll-m-20 text-sm font-semibold tracking-tight', className)} {...props} />
  ),
);
TypographyH6.displayName = 'TypographyH4';

export { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyH6 };
