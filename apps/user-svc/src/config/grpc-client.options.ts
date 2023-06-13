import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'user',
    protoPath: join(__dirname, '../_proto/user.proto'),
  },
};

export const grpcClientOptionsProduction: ClientOptions = {
  ...grpcClientOptions,
  options: {
    ...grpcClientOptions.options,
    url: `${process.env.GRPC_HOST}:${process.env.GRPC_PORT}`,
    loader: {
      keepCase: true,
      enums: String,
      oneofs: true,
      arrays: true,
    },
  },
};
