import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table({ tableName: 'refresh_tokens', underscored: true })
export class RefreshToken extends Model<RefreshToken> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  userId: string;

  @Column({ type: DataType.STRING, allowNull: false })
  token: string;

  @Column({ type: DataType.DATE, allowNull: false })
  expiresAt: Date;

  @BelongsTo(() => User)
  user: User;
}
