FROM node:16-alpine

WORKDIR /backend

COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE 3020

CMD ["npm", "run", "start"]