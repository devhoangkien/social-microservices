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
}
