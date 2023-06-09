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
  HasMany,
  HasOne,
} from 'sequelize-typescript';

import { Role } from './role.model';
import { UserRole } from './userRole.model';
import { Session } from './session.model';
import { RefreshToken } from './refresh-token.model';
import { UserSetting } from './user-setting.model';

@Table({
  tableName: 'users',
  underscored: true,
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

  @HasMany(() => Session)
  sessions: Session[];

  @HasMany(() => RefreshToken)
  refreshTokens: RefreshToken[];

  @HasOne(() => UserSetting)
  userSetting: UserSetting;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
