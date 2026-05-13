/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from 'src/controller/auth.controller';
import { UsersRepository } from 'src/repository/users.repository';
import { AuthService } from 'src/service/auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, UsersRepository],
})
export class AuthModule { }
