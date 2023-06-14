import { Inject, Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly logger: PinoLogger,
    @Inject('UserServiceClient')
    private readonly userServiceClient: ClientGrpcProxy,
  ) {
    logger.setContext(AuthService.name);
  }
  private userClient: any;

  onModuleInit() {
    this.userClient = this.userServiceClient.getService('UserService');
    console.log('userClient', this.userClient);
  }

  async authenticate(username: string, password: string): Promise<boolean> {
    this.logger.info('AuthService#authenticate.call %o', username);

    console.log('username: ', username);
    // Xử lý xác thực ở đây và trả về kết quả
    return true;
  }

  async register(
    username: string,
    password: string,
    email: string,
  ): Promise<boolean> {
    this.logger.info('AuthService#register.call %o', username);
    const result = await firstValueFrom(
      this.userClient.createUser({ username, password, email }),
    );

    console.log('username: ', username);
    // Xử lý đăng ký ở đây và trả về kết quả
    return true;
  }

  async login(username: string, password: string): Promise<boolean> {
    this.logger.info('AuthService#login.call %o', username);

    // Call the user service to retrieve the user by username
    const userResponse = await firstValueFrom(
      this.userClient.getUserByUsername({ username }),
    );

    console.log('userResponse: ', userResponse);

    // const user = userResponse
    // if (!user) {
    //   throw new Error('User not found');
    // }

    // // Check if the provided password matches the stored password
    // const isPasswordValid = user.password === password;

    // if (isPasswordValid) {
    //   // Perform additional login operations if needed
    //   // ...

    //   return true;
    // }

    return false;
  }
}
