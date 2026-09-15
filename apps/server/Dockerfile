FROM node:24-alpine AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@11.25.0 --activate

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter server build
RUN pnpm --filter server deploy --prod /out
RUN cp -r apps/server/dist /out/dist

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4000

COPY --from=builder /out ./

EXPOSE 4000
CMD ["node", "dist/main.js"]
