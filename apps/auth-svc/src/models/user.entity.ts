import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class UserModel extends Model<UserModel> {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}
