FROM node:18 as build

WORKDIR /usr/apps/auth-svc

ADD  package.json ./

RUN npm install --production 

RUN npm run build --production 

FROM node:18

WORKDIR /usr/apps/auth-svc

COPY --from=build /usr/apps/auth-svc .

EXPOSE 50051

CMD ["node", "main.js"]