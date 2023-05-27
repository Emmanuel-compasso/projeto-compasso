"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./users.entity");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllUsers() {
        const query = `SELECT id, name, user, birthdate, email, profile_photo FROM user`;
        const users = await this.userRepository.query(query);
        if (users.length === 0) {
            return { status: 404, msg: 'Erro: Nenhum usuário' };
        }
        return { status: 200, msg: 'Sucesso', users: users };
    }
    async getOneUser(id) {
        const query = `SELECT id, name, user, birthdate, email FROM user WHERE id = ?`;
        const user = await this.userRepository.query(query, [id]);
        if (user.length === 0) {
            return { status: 404, msg: 'Erro: Usuário não existe' };
        }
        return { status: 200, msg: 'Sucesso', user: user[0] };
    }
    async postNewUser(user) {
        const name = user.name;
        const username = user.user;
        const birthdate = user.birthdate;
        const email = user.email;
        const profile_photo = user.profile_photo;
        const password = user.password;
        if ((name || username || birthdate || email || password || profile_photo) ==
            null) {
            return { status: 400, msg: 'Erro: Campo inválido' };
        }
        const query = `INSERT INTO user (name, user, birthdate, email, profile_photo, password) VALUES (?, ?, ?, ?, ?, ?)`;
        await this.userRepository.query(query, [
            name,
            username,
            birthdate,
            email,
            profile_photo,
            password,
        ]);
        const insertedIdQuery = `SELECT last_insert_rowid() as id`;
        const insertedIdResult = await this.userRepository.query(insertedIdQuery);
        const insertedId = insertedIdResult[0].id;
        const query2 = `SELECT id, name, user, birthdate, email FROM user WHERE id = ?`;
        const newUser = await this.userRepository.query(query2, [insertedId]);
        return { status: 201, msg: 'Sucesso', user: newUser[0] };
    }
    async postLogin(user) {
        const username = user.user;
        const password = user.password;
        const query = `SELECT user, password FROM user WHERE user = ? AND password = ?`;
        const result = await this.userRepository.query(query, [username, password]);
        if (result.length > 0) {
            const userId = result[0].id;
            const loggedInUser = await this.getOneUser(userId);
            return { status: 200, msg: 'Sucesso', user: loggedInUser.user };
        }
        return { status: 400, msg: 'Erro: Usuário inválido' };
    }
    async putUpdateUser(id, updatedUser) {
        const name = updatedUser.name;
        const username = updatedUser.user;
        const birthdate = updatedUser.birthdate;
        const email = updatedUser.email;
        const profile_photo = updatedUser.profile_photo;
        const password = updatedUser.password;
        const query = `UPDATE user SET name = ?, user = ?, birthdate = ?, email = ?, profile_photo = ?, password = ? WHERE id = ?`;
        await this.userRepository.query(query, [
            name,
            username,
            birthdate,
            email,
            profile_photo,
            password,
            id,
        ]);
        const query2 = `SELECT id, name, user, birthdate, email, profile_photo FROM user WHERE id = ?`;
        const newUser = await this.userRepository.query(query2, [id]);
        if (newUser.length === 0) {
            return { status: 404, msg: 'Erro: Usuário não existe' };
        }
        return { status: 200, msg: 'Sucesso', user: newUser[0] };
    }
    async deleteUser(id) {
        const query = `DELETE FROM user WHERE id = ?`;
        const result = await this.getOneUser(id);
        if (result === undefined || result.status == 404) {
            return { status: 404, msg: 'Erro: Usuário não existe' };
        }
        await this.userRepository.query(query, [id]);
        return { status: 204, msg: 'Sucesso' };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map