import { Injectable } from '@nestjs/common';
import { User, UserProfile, UserSetting } from '@prisma/client';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import {
  GrpcNotFoundException,
  GrpcAlreadyExistsException,
} from 'nestjs-grpc-exceptions';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async createUser(data: User): Promise<any> {
    const { username, email } = data;

    // Check if a user with the provided username already exists
    const existingUserByUsername = await this.prisma.user.findUnique({
      where: { username },
    });

    if (existingUserByUsername) {
      throw new GrpcAlreadyExistsException('Username is already taken.');
    }

    // Check if a user with the provided email already exists
    const existingUserByEmail = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      throw new GrpcAlreadyExistsException('Email is already taken.');
    }
    try {
      const user = await this.prisma.user.create({ data });
      return { user };
    } catch (err) {
      throw new GrpcNotFoundException(err);
    }
  }

  async updateUser(id: string, data: Partial<User>): Promise<any> {
    const user = await this.prisma.user.update({ where: { id }, data });
    return { user };
  }

  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }

  async createUserSetting(
    userId: string,
    data: UserSetting,
  ): Promise<UserSetting> {
    return this.prisma.userSetting.create({
      data: { ...data, user_id: userId },
    });
  }

  async getUserSettingByUserId(userId: string): Promise<UserSetting | null> {
    return this.prisma.userSetting.findUnique({ where: { user_id: userId } });
  }

  async updateUserSetting(
    userId: string,
    data: Partial<UserSetting>,
  ): Promise<UserSetting> {
    return this.prisma.userSetting.update({ where: { user_id: userId }, data });
  }

  async createUserProfile(
    userId: string,
    data: UserProfile,
  ): Promise<UserProfile> {
    return this.prisma.userProfile.create({
      data: { ...data, user_id: userId },
    });
  }

  async getUserProfileByUserId(userId: string): Promise<UserProfile | null> {
    return this.prisma.userProfile.findUnique({ where: { user_id: userId } });
  }

  async updateUserProfile(
    userId: string,
    data: Partial<UserProfile>,
  ): Promise<UserProfile> {
    return this.prisma.userProfile.update({
      where: { user_id: userId },
      data,
    });
  }
}
