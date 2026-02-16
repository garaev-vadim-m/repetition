import { User } from 'src/database/entity/users/users.entity';
import { UpdateUserDto } from 'src/http/dto/users/update-user.dto';
import { CreateUserDto } from 'src/http/dto/users/users.dto';
import { Users } from 'src/http/module/users/users/UsersType.type';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<Users[]>;
    find(id: number): Promise<Users>;
    create(dto: CreateUserDto): User;
    update(id: number, dto: UpdateUserDto): Promise<Users>;
    remove(id: number): Promise<User>;
}
