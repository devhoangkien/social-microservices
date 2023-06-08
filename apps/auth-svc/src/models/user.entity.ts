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
  tableName: 'users',
  indexes: [
    {
      fields: ['email', 'phone', 'name'],
    },
  ],
  hooks: {
    beforeCreate: (user: UserModel) => {},
  },
})
export class UserModel extends Model<UserModel> {
  @PrimaryKey
  @Column(DataType.UUIDV4)
  id: number;

  @Column
  name: string;

  @Column
  email: number;

  @Column
  password: string;

  @Column
  phone: string;

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
