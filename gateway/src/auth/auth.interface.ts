import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export interface IAuthService {
  validateToken(): Observable<any>;
}
