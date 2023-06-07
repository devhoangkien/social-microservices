FROM node:18 as build

WORKDIR /usr/apps/auth

ADD dist package.json ./

RUN npm install --production --omit=dev

FROM node:18

WORKDIR /usr/apps/auth

COPY --from=build /usr/apps/auth .

EXPOSE 50051

CMD ["node", "main.js"]