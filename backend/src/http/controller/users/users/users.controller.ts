import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateUserDto } from 'src/http/dto/users/update-user.dto';
import { CreateUserDto } from 'src/http/dto/users/users.dto';
import { Users } from 'src/http/module/users/users/UsersType.type';
import { UsersService } from 'src/http/service/users/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Users[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.find(id);
  }

  @Post()
  setUser(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Patch(':id')
  setUpdateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto,
  ) {
    if (!Object.keys(dto).length) {
      throw new BadRequestException('Нет данных о пользователе');
    }
    return this.usersService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
