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
            throw new Error('User not found');
        }
        return users;
    }
    async getOneUser(id) {
        const query = `SELECT id, name, user, birthdate, email FROM user WHERE id = ?`;
        const user = await this.userRepository.query(query, [id]);
        if (user.length === 0) {
            throw new Error('User not found');
        }
        return user[0];
    }
    async postNewUser(user) {
        const name = user.name;
        const username = user.user;
        const birthdate = user.birthdate;
        const email = user.email;
        const profile_photo = user.profile_photo;
        const password = user.password;
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
        return newUser[0];
    }
    async putUpdateUser(id, updatedUser) {
        const name = updatedUser.name;
        const username = updatedUser.user;
        const birthdate = updatedUser.birthdate;
        const email = updatedUser.email;
        const profile_photo = updatedUser.profile_photo;
        const password = updatedUser.password;
        const query = `UPDATE user SET name = ?, username = ?, birthdate = ?, email = ?, profile_photo = ?, password = ? WHERE id = ?`;
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
        updatedUser = await this.userRepository.query(query, [updatedUser.id]);
        return updatedUser;
    }
    async deleteUser(id) {
        const query = `DELETE FROM user WHERE id = ?`;
        await this.userRepository.query(query, [id]);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map