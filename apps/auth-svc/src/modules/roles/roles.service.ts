import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Role } from 'src/models/role.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role)
    private roleModel: typeof Role,
  ) {}

  async getRoleById(id: number): Promise<Role> {
    const role = await this.roleModel.findByPk(id);
    return role;
  }
}
