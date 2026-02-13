import { UpdateUserDto } from 'src/http/dto/users/update-user.dto';
import { CreateUserDto } from 'src/http/dto/users/users.dto';
import { Users } from 'src/http/module/users/users/UsersType.type';
import { UsersService } from 'src/http/service/users/users/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Users[];
    getUser(id: number): Users;
    setUser(dto: CreateUserDto): Users;
    setUpdateUser(id: number, dto: UpdateUserDto): Users;
    deleteUser(id: number): void;
}
