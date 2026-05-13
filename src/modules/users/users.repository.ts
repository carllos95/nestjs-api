/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/modules/auth/dto/registerUser.dto';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) { }
  findAll() {
    return this.prisma.users.findMany();
  }
  findUserByEmail(email: string) {
    return this.prisma.users.findUnique({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true
      },
      where: {
        email
      }
    })
  }

  async createUser(userBody: RegisterUserDto) {
    return await this.prisma.users.create({
      data: {
        name: userBody.name,
        email: userBody.email,
        password: userBody.password
      }
    })
  }
}
