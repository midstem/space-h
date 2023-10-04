FROM oven/bun

WORKDIR /app

COPY package.json package.json
COPY bun.lockb bun.lockb
COPY tsconfig.json tsconfig.json

RUN bun install

EXPOSE 8080

CMD bun src/app.ts