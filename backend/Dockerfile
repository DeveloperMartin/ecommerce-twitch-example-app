FROM node:16-alpine

WORKDIR /backend

COPY package*.json ./backend

COPY ./build ./build

EXPOSE 3020

CMD ["npm", "start"]