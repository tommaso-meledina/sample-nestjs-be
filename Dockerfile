# -------- BUILD STAGE --------
FROM node:24-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build the app
COPY . .
RUN npm run build


# -------- RUNTIME STAGE --------
FROM node:24-alpine AS runner

WORKDIR /app

# Copy built app and install only production deps
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]