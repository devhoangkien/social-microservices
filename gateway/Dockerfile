FROM node:18-alpine as build

WORKDIR /usr/share/gateway

COPY dist package.json ./

RUN npm install --production

FROM node:18-alpine

WORKDIR /usr/share/gateway

COPY --from=build /usr/share/gateway .

EXPOSE 3000

CMD ["node", "main.js"]