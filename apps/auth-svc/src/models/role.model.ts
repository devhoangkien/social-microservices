// role.model.ts

import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './user.model';
import { UserRole } from './userRole.model';

@Table({ tableName: 'roles', underscored: true })
export class Role extends Model<Role> {
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

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  level: number;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];
}
