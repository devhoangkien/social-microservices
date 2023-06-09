// rolePermission.model.ts

import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Role } from './role.model';
import { Permission } from './permission.model';

@Table({ tableName: 'role_permissions', underscored: true, timestamps: false })
export class RolePermission extends Model<RolePermission> {
  @ForeignKey(() => Role)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  roleId: string;

  @ForeignKey(() => Permission)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  permissionKey: string;
}
