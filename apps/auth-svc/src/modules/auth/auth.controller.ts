import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod('AuthService', 'authenticate')
  async authenticate(data: any, metadata: any) {
    // Xử lý yêu cầu xác thực ở đây
    const result = await this.authService.authenticate(
      data.username,
      data.password,
    );
    return { result };
  }

  @GrpcMethod('AuthService', 'register')
  async register(data: any, metadata: any) {
    // Xử lý yêu cầu đăng ký ở đây
    const result = await this.authService.register(
      data.username,
      data.password,
      data.email,
    );
    return { result };
  }

  @GrpcMethod('AuthService', 'login')
  async login(data: any): Promise<any> {
    const { username, password } = data;

    const result = await this.authService.login(username, password);
    console.log('result: ', result);
    return result;
  }
}
