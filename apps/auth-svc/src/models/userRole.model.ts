// userRole.model.ts

import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Role } from './role.model';
import { UUID } from 'crypto';

interface UserRoleAttribute {
  userId: UUID;
  roleId: UUID;
}
@Table({ tableName: 'user_roles', underscored: true, timestamps: false })
export class UserRole extends Model<UserRoleAttribute> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  roleId: string;
}
