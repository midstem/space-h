FROM oven/bun

ADD src src
ADD package.json package.json
ADD bun.lockb bun.lockb
RUN bun install

EXPOSE 8080

CMD bun src/app.ts
