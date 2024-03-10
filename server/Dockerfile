FROM node:18.18 as base

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn

COPY src ./src

CMD npx nodemon 
