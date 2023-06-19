FROM node:18 as production

WORKDIR /usr/apps/user-svc

COPY prisma ./prisma/ 

ADD  package.json ./

RUN npm install --production --omit=dev

RUN npm run prisma:generate

FROM node:18

WORKDIR /usr/apps/user-svc

COPY --from=build /usr/apps/user-svc .

EXPOSE 50051

CMD ["node", "main.js"]

# Development
# Stage 1: Xây dựng ứng dụng
FROM node:18 as development

WORKDIR /usr/apps/user-svc

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
