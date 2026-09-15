FROM node:24-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@11.25.0 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json .npmrc ./
COPY apps/web ./apps/web
COPY apps/server/package.json ./apps/server/package.json
COPY packages ./packages

ENV NODE_OPTIONS=--max-old-space-size=768
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm install --frozen-lockfile --filter web...
RUN pnpm --filter web build

FROM node:24-alpine AS runner
WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
RUN mkdir -p apps/web/public
USER nextjs
EXPOSE 3000
CMD ["node", "apps/web/server.js"]
