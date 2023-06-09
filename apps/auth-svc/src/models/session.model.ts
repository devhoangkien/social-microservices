import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table({ tableName: 'sessions', underscored: true })
export class Session extends Model<Session> {
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

  @Column({ type: DataType.STRING, allowNull: false })
  ip: string;

  @Column({ type: DataType.STRING, allowNull: true })
  userAgent: string;

  @Column({ type: DataType.STRING, allowNull: true })
  fingerprint: string;

  @Column({ type: DataType.STRING, allowNull: false })
  device: string;

  @Column({ type: DataType.STRING, allowNull: true })
  os: string;

  @Column({ type: DataType.STRING, allowNull: true })
  browser: string;

  @Column({ type: DataType.STRING, allowNull: true })
  engine: string;
}
