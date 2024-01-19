FROM oven/bun:1.0.23

WORKDIR /app

COPY package.json bun.lockb tsconfig.json ./

RUN bun install

EXPOSE 8080

CMD bun src/app.ts