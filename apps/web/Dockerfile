FROM node:24-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@11.25.0 --activate

RUN printf '%s\n' '{"name":"turborepo-lab","private":true,"packageManager":"pnpm@11.25.0"}' > package.json
RUN printf '%s\n' 'packages:' '- "apps/web"' '- "packages/ui"' '- "packages/typescript-config"' > pnpm-workspace.yaml

COPY apps/web ./apps/web
COPY packages/ui ./packages/ui
COPY packages/typescript-config ./packages/typescript-config

RUN node -e "const fs=require('fs'); for (const file of ['apps/web/package.json','packages/ui/package.json']) { const p=JSON.parse(fs.readFileSync(file,'utf8')); for (const key of ['dependencies','devDependencies']) { if (!p[key]) continue; delete p[key]['@repo/eslint-config']; delete p[key].eslint; } fs.writeFileSync(file, JSON.stringify(p,null,2)); }"
RUN rm -f apps/web/eslint.config.js packages/ui/eslint.config.mjs

ENV NODE_OPTIONS=--max-old-space-size=768
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm install --filter web...
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
