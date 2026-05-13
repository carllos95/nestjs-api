/* eslint-disable prettier/prettier */
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { RegisterUserDto } from './dto/registerUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  @HttpCode(201)
  async create(@Body() user: RegisterUserDto) {
    const createdUser = await this.authService.register(user);
    return {
      message: 'Usuário criado com sucesso!',
      user: createdUser,
    }
  }
}
