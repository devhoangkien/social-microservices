import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'auth', // ['hero', 'hero2']
    protoPath: join(__dirname, './_proto/auth.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
  },
};
