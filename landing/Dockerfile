FROM node:19.0.0-bullseye-slim

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD yarn s