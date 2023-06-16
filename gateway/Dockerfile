FROM node:18-alpine as build

WORKDIR /usr/apps/gateway

COPY dist package.json ./

RUN npm install --production --omit=dev

FROM node:18-alpine

WORKDIR /usr/apps/gateway

COPY --from=build /usr/apps/gateway .

EXPOSE 3000

CMD ["node", "main.js"]



# Dockerfile cho auth-svc

# Stage 1: Xây dựng ứng dụng
FROM node:18 as development

WORKDIR /usr/apps/gateway

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
