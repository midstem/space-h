FROM oven/bun

ADD src src
ADD package.json package.json
ADD bun.lockb bun.lockb
ADD tsconfig.json tsconfig.json
RUN bun install

EXPOSE 8080

CMD bun src/app.ts
