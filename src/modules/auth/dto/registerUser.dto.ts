/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsEmail(
    {},
    {
      message: 'E-mail inválido',
    },
  )
  email!: string;

  @IsString()
  name!: string;

  @MinLength(6, {
    message: 'Senha deve ter no mínimo 6 caracteres',
  })
  password!: string;
}
