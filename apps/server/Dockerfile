FROM node:24-alpine AS builder
WORKDIR /app
COPY apps/server/package.json apps/server/tsconfig.json apps/server/tsconfig.build.json apps/server/nest-cli.json ./
COPY apps/server/src ./src
RUN node -e "const fs=require('fs'); const p=JSON.parse(fs.readFileSync('package.json','utf8')); p.devDependencies={ '@nestjs/cli': p.devDependencies['@nestjs/cli'], typescript: p.devDependencies.typescript, '@types/node': p.devDependencies['@types/node'] }; fs.writeFileSync('package.json', JSON.stringify(p, null, 2));"
RUN npm install
RUN npx nest build

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4000
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 4000
CMD ["node", "dist/main.js"]
