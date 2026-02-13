import { UpdateUserDto } from 'src/http/dto/users/update-user.dto';
import { CreateUserDto } from 'src/http/dto/users/users.dto';
import { Users } from 'src/http/module/users/users/UsersType.type';
export declare class UsersService {
    private users;
    nextId: number;
    findAll(): Users[];
    find(id: number): Users;
    create(dto: CreateUserDto): Users;
    update(id: number, dto: UpdateUserDto): Users;
    remove(id: number): void;
}
