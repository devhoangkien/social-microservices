import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { RolePermission } from './rolePermission.model';
import { Permission } from './permission.model';

@Table({
  tableName: 'roles',
  underscored: true,
  timestamps: false,
})
export class Role extends Model<Role> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
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

  @BelongsToMany(() => Permission, () => RolePermission)
  permissions: Permission[];
}
