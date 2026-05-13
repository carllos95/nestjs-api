/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './module/users.module';
import { PrismaModule } from './module/prisma.module';
import { AuthModule } from './module/auth.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
