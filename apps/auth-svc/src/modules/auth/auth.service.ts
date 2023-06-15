import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import * as jwt from 'jsonwebtoken';

import { comparePasswords } from 'shared/utils/password.utils';
import { RolesService } from '../roles/roles.service';
import {
  GrpcNotFoundException,
  GrpcUnknownException,
} from 'nestjs-grpc-exceptions';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    private readonly logger: PinoLogger,
    private readonly roleService: RolesService,

    // Inject the GRPC client for the user service
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

  async login(username: string, password: string): Promise<any> {
    try {
      this.logger.info('AuthService#login.call %o', username);

      // Call the user service to retrieve the user by username
      const userResponse: any = await firstValueFrom(
        this.userClient.getUserByUsername({ username }),
      );

      console.log('userResponse: ', userResponse);

      const user = userResponse.user;
      if (!user) {
        throw new GrpcNotFoundException('Wrong account or password');
      }

      const isPasswordValid = await comparePasswords(password, user.password);
      if (!isPasswordValid) {
        throw new GrpcNotFoundException('Wrong account or password');
      }

      console.log('isPasswordValid: ', isPasswordValid);

      // Get user role
      const roleResponse: any = await this.roleService.getRoleById(
        user.role_id,
      );
      console.log('roleResponse: ', roleResponse);
      console.log('roleResponse: ', roleResponse.name);

      // Generate JWT token
      const tokenPayload = {
        username: user.username,
        role: roleResponse.name,
        email: user.email,
      };
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      });
      console.log('token: ', token);

      return {
        result: {
          access_token: token,
          role: roleResponse.name,
          email: user.email,
        },
      };
    } catch (error) {
      throw new GrpcUnknownException(error);
    }
  }
}
