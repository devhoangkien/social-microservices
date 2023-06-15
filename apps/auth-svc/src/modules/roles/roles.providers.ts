import { Role } from 'src/models/role.model';

export const rolesProviders = [{ provide: 'RoleRepository', useValue: Role }];
