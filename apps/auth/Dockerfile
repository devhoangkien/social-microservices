FROM node:18 as build

# Thiết lập thư mục làm việc trong container
WORKDIR /usr/app/auth

# Sao chép tệp package.json và package-lock.json vào thư mục làm việc
COPY ./package.json ./package-lock.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép mã nguồn của Auth service vào thư mục làm việc
COPY ./src ./src

# Sao chép tệp nest-cli.json vào thư mục làm việc
COPY ./nest-cli.json ./

# Sao chép tệp tsconfig.json vào thư mục làm việc
COPY ./tsconfig.json ./

# Xây dựng ứng dụng NestJS
RUN npm run build

# Mở cổng 50051 trong container
EXPOSE 50051

# Chạy ứng dụng NestJS khi container được khởi chạy
CMD ["npm", "run", "start:prod"]

