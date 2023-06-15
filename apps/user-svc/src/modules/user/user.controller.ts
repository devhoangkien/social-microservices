import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { GrpcMethod } from '@nestjs/microservices';
import { User, UserProfile, UserSetting } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'CreateUser')
  async createUser(user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @GrpcMethod('UserService', 'GetUserById')
  async getUserById(id: string): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @GrpcMethod('UserService', 'GetAllUsers')
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @GrpcMethod('UserService', 'UpdateUser')
  async updateUser({
    id,
    data,
  }: {
    id: string;
    data: Partial<User>;
  }): Promise<User> {
    return this.userService.updateUser(id, data);
  }

  @GrpcMethod('UserService', 'DeleteUser')
  async deleteUser(id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }

  @GrpcMethod('UserService', 'CreateUserSetting')
  async createUserSetting({
    userId,
    data,
  }: {
    userId: string;
    data: UserSetting;
  }): Promise<UserSetting> {
    return this.userService.createUserSetting(userId, data);
  }

  @GrpcMethod('UserService', 'GetUserSettingByUserId')
  async getUserSettingByUserId(userId: string): Promise<UserSetting | null> {
    return this.userService.getUserSettingByUserId(userId);
  }

  @GrpcMethod('UserService', 'UpdateUserSetting')
  async updateUserSetting({
    userId,
    data,
  }: {
    userId: string;
    data: Partial<UserSetting>;
  }): Promise<UserSetting> {
    return this.userService.updateUserSetting(userId, data);
  }

  @GrpcMethod('UserService', 'CreateUserProfile')
  async createUserProfile({
    userId,
    data,
  }: {
    userId: string;
    data: UserProfile;
  }): Promise<UserProfile> {
    return this.userService.createUserProfile(userId, data);
  }

  @GrpcMethod('UserService', 'GetUserProfileByUserId')
  async getUserProfileByUserId(userId: string): Promise<UserProfile | null> {
    return this.userService.getUserProfileByUserId(userId);
  }

  @GrpcMethod('UserService', 'UpdateUserProfile')
  async updateUserProfile({
    userId,
    data,
  }: {
    userId: string;
    data: Partial<UserProfile>;
  }): Promise<UserProfile> {
    return this.userService.updateUserProfile(userId, data);
  }

  @GrpcMethod('UserService', 'GetUserByEmail')
  async getUserByEmail(email: string): Promise<User | null> {
    return this.userService.getUserByEmail(email);
  }

  @GrpcMethod('UserService', 'GetUserByUsername')
  async getUserByUsername(data: any): Promise<User | null> {
    console.log('dât', data);
    return this.userService.getUserByUsername(data.username);
  }
}
