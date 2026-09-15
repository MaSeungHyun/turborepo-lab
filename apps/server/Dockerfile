FROM node:24-alpine AS pruner
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@11.25.0 --activate
COPY . .
RUN pnpm dlx turbo@2.10.13 prune server --docker --prod

FROM node:24-alpine AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@11.25.0 --activate
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile
COPY --from=pruner /app/out/full/ .
RUN npm install -g @nestjs/cli@11 typescript@5.7.3
WORKDIR /app/apps/server
RUN nest build

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4000
COPY --from=builder /app/apps/server/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/server/node_modules ./apps/server/node_modules
COPY --from=builder /app/apps/server/package.json ./package.json
EXPOSE 4000
CMD ["node", "dist/main.js"]
