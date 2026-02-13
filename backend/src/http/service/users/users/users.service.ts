import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from 'src/http/dto/users/update-user.dto';
import { CreateUserDto } from 'src/http/dto/users/users.dto';
import { Users } from 'src/http/module/users/users/UsersType.type';

@Injectable()
export class UsersService {
  private users: Users[] = [
    {
      id: 1,
      email: 'vadim@vadim.ru',
      name: 'Vadim',
    },
  ];

  nextId = 1;

  findAll(): Users[] {
    return this.users;
  }

  find(id: number) {
    const user = this.users.find((value) => value.id === id);
    if (!user) throw new NotFoundException('Пользователь не найден!');
    return user;
  }

  create(dto: CreateUserDto) {
    const newUser: Users = {
      id: this.nextId++,
      name: dto.name,
      email: dto.email,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, dto: UpdateUserDto): Users {
    const user = this.find(id);
    Object.assign(user, dto);
    return user;
  }

  remove(id: number) {
    const index = this.users.findIndex((value) => value.id === id);

    if (index === -1) {
      throw new NotFoundException('Пользователь не найден!');
    }

    this.users.splice(index, 1);
  }
}
