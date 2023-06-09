// permission.model.ts

import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  Default,
  PrimaryKey,
} from 'sequelize-typescript';
import { Role } from './role.model';
import { RolePermission } from './rolePermission.model';

@Table({ tableName: 'permissions', underscored: true, timestamps: false })
export class Permission extends Model<Permission> {
  @PrimaryKey
  @Default(DataType.STRING)
  @Column(DataType.STRING)
  key: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  value: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  group: string;

  @BelongsToMany(() => Role, () => RolePermission)
  roles: Role[];
}
