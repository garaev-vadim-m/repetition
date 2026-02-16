import { UpdateUserDto } from 'src/http/dto/users/update-user.dto';
import { CreateUserDto } from 'src/http/dto/users/users.dto';
import { Users } from 'src/http/module/users/users/UsersType.type';
import { UsersService } from 'src/http/service/users/users/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<Users[]>;
    getUser(id: number): Promise<Users>;
    setUser(dto: CreateUserDto): Promise<import("../../../../database/entity/users/users.entity").User>;
    setUpdateUser(id: number, dto: UpdateUserDto): Promise<Users>;
    deleteUser(id: number): Promise<import("../../../../database/entity/users/users.entity").User>;
}
