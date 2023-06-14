import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

@Table({ tableName: 'sessions', underscored: true })
export class Session extends Model<Session> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  userId: string;

  @Column({ type: DataType.STRING, allowNull: false })
  token: string;

  @Column({ type: DataType.DATE, allowNull: false })
  expiresAt: Date;

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
