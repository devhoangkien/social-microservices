import {
  Controller,
  Inject,
  Get,
  OnModuleInit,
  Body,
  Post,
} from '@nestjs/common';
import { ClientGrpcProxy, GrpcMethod } from '@nestjs/microservices';
import { ApiProperty } from '@nestjs/swagger';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import { UserRequest, UserResponse } from './dtos/create-user.dto';
@Controller('auth')
export class AuthController implements OnModuleInit {
  constructor(
    @Inject('AuthServiceClient')
    private readonly authServiceClient: ClientGrpcProxy,

    @Inject('UserServiceClient')
    private readonly userServiceClient: ClientGrpcProxy,
  ) {}
  private authClient: any;
  private userClient: any;

  onModuleInit() {
    this.authClient = this.authServiceClient.getService('AuthService');
    console.log(this.authClient);
    this.userClient = this.userServiceClient.getService('UserService');
    console.log(this.userClient);
  }

  @Get()
  async checkAuth() {
    const data = {
      username: 'admin',
      password: 'admin',
    };
    const result = await firstValueFrom(
      this.authClient.authenticate(data),
    ).catch((err) => {
      console.log(err);
    });
    console.log('result', result);
    return result;
  }

  @Post('user')
  async createUser(@Body() userData: UserRequest): Promise<any> {
    const result = await firstValueFrom(
      this.userClient.createUser(userData),
    ).catch((err) => {
      console.log(err);
    });
    return result;
  }
}
