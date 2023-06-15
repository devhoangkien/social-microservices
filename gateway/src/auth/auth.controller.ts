import {
  Controller,
  Inject,
  Get,
  OnModuleInit,
  Body,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ClientGrpc, ClientGrpcProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { UserRequest } from './dtos/create-user.dto';
import { GrpcToHttpInterceptor } from 'nestjs-grpc-exceptions';
import { LoginRequest } from './dtos/login.dto';
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
  @UseInterceptors(GrpcToHttpInterceptor)
  async createUser(@Body() userRequest: UserRequest): Promise<any> {
    const result = await firstValueFrom(
      this.userClient.createUser(userRequest),
    );
    return result;
  }

  @Post('login')
  @UseInterceptors(GrpcToHttpInterceptor)
  async login(@Body() loginRequest: LoginRequest): Promise<any> {
    const result = await firstValueFrom(this.authClient.login(loginRequest));
    console.log('const result =const result =const result =', result);
    return result;
  }
}
