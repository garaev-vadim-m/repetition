import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entity/users/users.entity';
import { UpdateUserDto } from 'src/http/dto/users/update-user.dto';
import { CreateUserDto } from 'src/http/dto/users/users.dto';
import { Users } from 'src/http/module/users/users/UsersType.type';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async find(id: number): Promise<Users> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('Пользователь не найден!');
    return user;
  }

  create(dto: CreateUserDto) {
    const user = this.userRepository.create(dto);
    return this.userRepository.create(user);
  }

  async update(id: number, dto: UpdateUserDto): Promise<Users> {
    const user = await this.find(id);
    Object.assign(user, dto);
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.find(id);
    return this.userRepository.remove(user);
  }
}
