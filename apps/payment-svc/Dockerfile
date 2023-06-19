FROM node:18 as production

WORKDIR /usr/apps/payment-svc

ADD  package.json ./

RUN npm install --production --omit=dev

FROM node:18

WORKDIR /usr/apps/payment-svc

COPY --from=build /usr/apps/payment-svc .

EXPOSE 50051

CMD ["node", "main.js"]


# Dockerfile cho auth-svc

# Stage 1: Xây dựng ứng dụng
FROM node:18 as development

WORKDIR /usr/apps/payment-svc

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]

