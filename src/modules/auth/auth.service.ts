/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dto/registerUser.dto';
import { UsersRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(private usersRepository: UsersRepository) { }

  async register(dto: RegisterUserDto) {
    const userExists = await this.usersRepository.findUserByEmail(dto.email)

    if (userExists) {
      throw new ConflictException(
        "E-mail já cadastrado!"
      )
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    try {
      const { id, name, email, createdAt } = await this.usersRepository.createUser({
        ...dto,
        password: hashedPassword,
      });

      return {
        id, name, email, createdAt
      }
    } catch (_) {
      throw new InternalServerErrorException();
    }
  }
}
