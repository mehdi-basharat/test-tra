FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat g++ make python3
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

ARG NEXT_APP_ENV
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_CANONICAL_URL
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_APP_API_URL
ARG NEXT_PUBLIC_TYRADS_SDK_API_KEY
ARG NEXT_PUBLIC_TYRADS_SDK_API_SECRET
ARG NEXT_PUBLIC_FIREBASE_API_KEY
ARG NEXT_PUBLIC_FIREBASE_PROJECT_ID
ARG NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ARG NEXT_PUBLIC_FACEBOOK_PIXEL_ID
ARG NEXT_PUBLIC_TYR_REWARDS_ACMOSOFT
ARG NEXT_PUBLIC_SDK_LOGGER_TYRADS
ARG NEXTAUTH_URL
ARG NEXTAUTH_SECRET
ARG FIREBASE_CLIENT_EMAIL
ARG FIREBASE_PRIVATE_KEY
ARG FIREBASE_AUTH_DOMAIN
ARG FIREBASE_STORAGE_BUCKET
ARG FIREBASE_MESSAGING_SENDER_ID
ARG FIREBASE_APP_ID
ARG FIREBASE_MEASUREMENT_ID
ARG GOOGLE_CLIENT_ID
ARG NEXT_PUBLIC_APPLE_CLIENT_ID
ARG NEXT_PUBLIC_APPLE_CLIENT_ID_STG
ARG NEXT_PUBLIC_APPLE_SECRET
ARG NEXT_PUBLIC_APPLE_SECRET_STG
ARG NEXT_PUBLIC_SENTRY_AUTH_TOKEN
ARG GOOGLE_CLIENT_SECRET
ARG NEXT_PUBLIC_APPSFLYER_WEB_KEY
ARG NEXT_PUBLIC_TYR_SDK_API_URL
ARG NEXT_PUBLIC_GTM_ID
ARG NEXT_PUBLIC_TYRADS_AMPLITUDE_API_KEY
ARG NEXT_PUBLIC_FIREBASE_APP_ID
ARG NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ARG NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
ARG NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
ARG NEXT_PUBLIC_TYRADS_VERISOUL_PROJECT_ID
ARG NEXT_PUBLIC_TYRADS_AMPLITUDE_API_KEY_STG

ENV NEXT_PUBLIC_TYRADS_AMPLITUDE_API_KEY=${NEXT_PUBLIC_TYRADS_AMPLITUDE_API_KEY}
ENV NEXT_PUBLIC_TYRADS_AMPLITUDE_API_KEY_STG=${NEXT_PUBLIC_TYRADS_AMPLITUDE_API_KEY_STG}

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD HOSTNAME="0.0.0.0" node server.js