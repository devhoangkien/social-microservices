FROM node:18 as build

WORKDIR /usr/apps/payment-svc

ADD dist package.json ./

RUN npm install --production --omit=dev

FROM node:18

WORKDIR /usr/apps/payment-svc

COPY --from=build /usr/apps/payment-svc .

EXPOSE 50051

CMD ["node", "main.js"]