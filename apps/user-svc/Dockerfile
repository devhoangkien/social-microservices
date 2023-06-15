FROM node:18 as build

WORKDIR /usr/apps/user-svc

COPY prisma ./prisma/ 

ADD dist package.json ./

RUN npm install --production --omit=dev

RUN npm run prisma:generate

FROM node:18

WORKDIR /usr/apps/user-svc

COPY --from=build /usr/apps/user-svc .

EXPOSE 50051

CMD ["node", "main.js"]