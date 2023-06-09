// permission.model.ts

import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Role } from './role.model';
import { RolePermission } from './rolePermission.model';

@Table({ tableName: 'permissions', underscored: true, timestamps: false })
export class Permission extends Model<Permission> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => Role, () => RolePermission)
  roles: Role[];
}
