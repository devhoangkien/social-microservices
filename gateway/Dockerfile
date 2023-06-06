FROM node:18-alpine as build

WORKDIR /usr/app/gateway

COPY dist package.json ./

RUN npm install --production

FROM node:18-alpine

WORKDIR /usr/app/gateway

COPY --from=build /usr/app/gateway .

EXPOSE 3000

CMD ["node", "main.js"]