/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  findUserByEmail(@Body('email') email: string) {
    console.log(email)
    return this.usersService.findUserByEmail(email)
  }
}
