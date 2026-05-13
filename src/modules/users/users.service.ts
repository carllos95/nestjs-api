/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }
  async findAll(): Promise<Users[]> {
    return this.usersRepository.findAll();
  }

  findUserByEmail(email: string) {
    const usersExist = this.usersRepository.findUserByEmail(email)
    if (!usersExist) {
      return { message: "Usuário não encontrado ou cadastrado!" }
    }

    return usersExist
  }
}
