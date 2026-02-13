"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    users = [
        {
            id: 1,
            email: 'vadim@vadim.ru',
            name: 'Vadim',
        },
    ];
    nextId = 1;
    findAll() {
        return this.users;
    }
    find(id) {
        const user = this.users.find((value) => value.id === id);
        if (!user)
            throw new common_1.NotFoundException('Пользователь не найден!');
        return user;
    }
    create(dto) {
        const newUser = {
            id: this.nextId++,
            name: dto.name,
            email: dto.email,
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, dto) {
        const user = this.find(id);
        Object.assign(user, dto);
        return user;
    }
    remove(id) {
        const index = this.users.findIndex((value) => value.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Пользователь не найден!');
        }
        this.users.splice(index, 1);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map