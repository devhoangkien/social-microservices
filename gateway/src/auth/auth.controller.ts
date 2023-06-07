import { Controller, Inject, Get, OnModuleInit } from '@nestjs/common';
import { ClientGrpcProxy, GrpcMethod } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('auth')
export class AuthController implements OnModuleInit {
  constructor(
    @Inject('AuthServiceClient')
    private readonly authServiceClient: ClientGrpcProxy,
  ) {}
  private authClient: any;

  onModuleInit() {
    this.authClient = this.authServiceClient.getService('AuthService');
    console.log(this.authClient);
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
}
