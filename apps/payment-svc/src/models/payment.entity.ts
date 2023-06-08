import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'payment',
  indexes: [
    {
      fields: ['name'],
    },
  ],
})
export class PaymentModel extends Model<PaymentModel> {
  @PrimaryKey
  @Column(DataType.UUID)
  id: number;

  @Column({})
  name: string;

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
