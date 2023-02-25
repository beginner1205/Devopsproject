FROM node:alpine AS development
ENV NODE_ENV development
WORKDIR /react-app
COPY ./package.json /react-app
COPY . .
CMD npm start