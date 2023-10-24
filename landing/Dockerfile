FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install && yarn cache clean

COPY . .

EXPOSE 3000

CMD ["yarn", "s"]