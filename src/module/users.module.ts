/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from 'src/controller/users.controller';
import { UsersRepository } from 'src/repository/users.repository';
import { UsersService } from 'src/service/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule { }
