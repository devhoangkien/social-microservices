// src/models/user-setting.model.ts

import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table({ tableName: 'user_settings', underscored: true })
export class UserSetting extends Model<UserSetting> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  userId: string;

  @Column({ type: DataType.STRING })
  theme: string;

  @Column({ type: DataType.STRING })
  settingKey: string;

  @Column({ type: DataType.STRING })
  settingValue: string;

  @BelongsTo(() => User)
  user: User;
}
