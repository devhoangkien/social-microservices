FROM node:18-alpine as build

WORKDIR /usr/share/auth

ADD dist package.json ./

RUN apk add --no-cache make g++ python postgresql-dev \
  && npm install --production

FROM node:18-alpine

RUN apk add --no-cache libpq

ADD https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/v0.3.2/grpc_health_probe-linux-amd64 /bin/grpc_health_probe

RUN chmod +x /bin/grpc_health_probe

WORKDIR /usr/share/auth

COPY --from=build /usr/share/auth .

EXPOSE 50051

CMD ["node", "main.js"]