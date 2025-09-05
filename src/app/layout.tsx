import { Suspense } from 'react';
import { Inter, Lexend } from 'next/font/google';

import type { Session } from 'next-auth';

import * as Sentry from '@sentry/nextjs';

import { Partytown } from '@builder.io/partytown/react';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';

import EnvironmentIndicator from '@/components/layout/env-indicator';
import BottomNav from '@/components/navigation/bottom-nav';
import { AppsflyerSmartBannerScript } from '@/components/scripts/appsflyer';
import AppsflyerSmartScript from '@/components/scripts/appsflyer/apps-smart-script';
import FacebookPixelScript from '@/components/scripts/fb-pixel';
import RedTrackScript from '@/components/scripts/red-track';
import VerisoulScript from '@/components/scripts/verisoul-track';
import WebEngageStagingScript from '@/components/scripts/webengage-staging-script';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';

import { BASE_URL, CANONICAL_URL, FACEBOOK_PIXEL_ID, GTM_ID, TYRADS_VERISOUL_PROJECT_ID } from '@/constants';

import { cn } from '@/lib/utils';

import { isProduction } from '@/utils/common';

import { getServerAuth } from './api/auth/[...nextauth]/config';
import Providers from './providers';
import AmplitudeContextProvider from './providers-amplitude';

import 'normalize.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });

const APP_NAME = 'Tyr Rewards';
const APP_DEFAULT_TITLE = 'Tyr Rewards | Play Awesome Games & Earn BIG Rewards!!';
const APP_TITLE_TEMPLATE = '%s | Tyr Rewards';
const APP_DESCRIPTION =
  'The Greatest Rewards Platform! Play, earn, and enjoy endless gifts, cash rewards, and exclusive perks. Start earning with Tyr Rewards today!';
const APP_IMAGE = 'https://tyrrewards.com/assets/og-image.png';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    url: BASE_URL,
    description: APP_DESCRIPTION,
    images: APP_IMAGE,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    site: BASE_URL,
    description: APP_DESCRIPTION,
    images: APP_IMAGE,
  },
  authors: {
    name: 'Tyr Rewards',
    url: BASE_URL,
  },
  other: {
    ...Sentry.getTraceData(),
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerAuth();

  return (
    <html lang="en">
      <head>
        <link href={CANONICAL_URL} rel="canonical" />
        <link href="/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/icons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/icons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/site.webmanifest" rel="manifest" />
        <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#00aba9" name="msapplication-TileColor" />
        <meta content="t5svm6haosh8poz3ubq2pxhtnzi12w" name="facebook-domain-verification" />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" src="https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1"/>`,
          }}
        />

        <WebEngageStagingScript />

        <AppsflyerSmartBannerScript />
        <AppsflyerSmartScript />
        <Partytown debug={true} forward={['dataLayer.push']} />
        <RedTrackScript />
        <FacebookPixelScript />

        <script src="https://js.verisoul.ai/prod/bundle.js" verisoul-project-id={TYRADS_VERISOUL_PROJECT_ID} async />
        <VerisoulScript />
      </head>
      <body className={cn(lexend.className, inter.className, 'flex h-dvh flex-col')}>
        <GoogleTagManager gtmId={GTM_ID} />

        <Suspense>
          {isProduction ? null : <EnvironmentIndicator />}
          <Providers session={session as Session}>
            <AmplitudeContextProvider>
              {children}
              <BottomNav />
              <Toaster />
              <SonnerToaster />
              {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </AmplitudeContextProvider>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
