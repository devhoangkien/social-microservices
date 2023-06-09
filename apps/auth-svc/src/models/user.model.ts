import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  PrimaryKey,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';

import { Role } from './role.model';
import { UserRole } from './userRole.model';

@Table({
  tableName: 'users',
  indexes: [
    {
      fields: ['email', 'phone', 'name'],
    },
  ],
})
export class User extends Model<User> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  username: string;

  @Column
  email: number;

  @Column
  password: string;

  @Column
  phone: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];

  @CreatedAt
  @Column({
    field: 'created_at',
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    field: 'updated_at',
  })
  updatedAt: Date;

  @DeletedAt
  @Column({
    field: 'deleted_at',
  })
  deletedAt: Date;
}
