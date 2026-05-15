FROM node:lts-alpine

WORKDIR /app
COPY dist .
COPY package.json .
COPY package-lock.json. dest

ENV NODE_ENV=production

RUN npm install

CMD [ "npm", "start" ]