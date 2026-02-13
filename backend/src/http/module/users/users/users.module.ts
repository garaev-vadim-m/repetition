import { Module } from '@nestjs/common';
import { UsersController } from 'src/http/controller/users/users/users.controller';
import { UsersService } from 'src/http/service/users/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
