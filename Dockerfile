# Stage 1 — Build
FROM node:lts-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy Prisma schema
COPY src/prisma ./prisma
RUN npx prisma migrate dev --name init

# Copy source files
COPY tsconfig*.json ./
COPY src ./src

# Build TypeScript → dist/
RUN npm run build

# Stage 2 — Runtime
FROM node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=4106

WORKDIR /app

RUN addgroup --system dt_hgqbe && \
    adduser --system -G dt_hgqbe dt_hgqbe

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src/prisma ./prisma

RUN chown -R dt_hgqbe:dt_hgqbe .

USER dt_hgqbe

CMD ["node", "dist/index.js"]