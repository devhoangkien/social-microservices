import { Observable } from 'rxjs';

export interface IAuthService {
  validateToken(): Observable<any>;
}
