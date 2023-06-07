import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class AuthService {
  constructor(private readonly logger: PinoLogger) {
    logger.setContext(AuthService.name);
  }

  async authenticate(username: string, password: string): Promise<boolean> {
    this.logger.info('AuthService#authenticate.call %o', username);

    console.log('username: ', username);
    // Xử lý xác thực ở đây và trả về kết quả
    return true;
  }
}
