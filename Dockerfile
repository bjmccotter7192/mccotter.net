FROM node:14-alpine AS builder

ADD package.json /app/

WORKDIR /app

COPY . .

EXPOSE 80

RUN npm cache clean --force &&\
    npm install &&\
    npm run build

CMD ["node", "server.js"]