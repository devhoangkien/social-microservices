import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  ForeignKey,
  PrimaryKey,
  Default,
  BeforeCreate,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { User } from './user.model';
import { UserRole } from './userRole.model';
import { RolePermission } from './rolePermission.model';
import { Permission } from './permission.model';
import { fn } from 'sequelize';

@Table({ tableName: 'roles', underscored: true, timestamps: false })
export class Role extends Model<Role> {
  @PrimaryKey
  @Default(fn('uuid_generate_v4'))
  @Column(DataType.UUID)
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  level: number;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];

  @BelongsToMany(() => Permission, () => RolePermission)
  permissions: Permission[];
}
