FROM node:18-alpine as build

WORKDIR /usr/apps/gateway

COPY dist package.json ./

RUN npm install --production --omit=dev

FROM node:18-alpine

WORKDIR /usr/apps/gateway

COPY --from=build /usr/apps/gateway .

EXPOSE 3000

CMD ["node", "main.js"]