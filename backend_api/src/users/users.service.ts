import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
interface UserResponse {
  status: number;
  msg: string;
  user?: User;
  users?: User[];
}
interface LoginResponse {
  status: number;
  msg: string;
  user?: User;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<UserResponse> {
    const query = `SELECT id, name, user, birthdate, email, profile_photo FROM user`;
    const users = await this.userRepository.query(query);
    if (users.length === 0) {
      return { status: 404, msg: 'Erro: Nenhum usuário' };
    }
    return { status: 200, msg: 'Sucesso', users: users };
  }

  async getOneUser(id: number): Promise<UserResponse> {
    const query = `SELECT id, name, user, birthdate, email FROM user WHERE id = ?`;
    const user = await this.userRepository.query(query, [id]);
    if (user.length === 0) {
      return { status: 404, msg: 'Erro: Usuário não existe' };
    }
    return { status: 200, msg: 'Sucesso', user: user[0] };
  }

  async postNewUser(user: User): Promise<UserResponse> {
    const name = user.name;
    const username = user.user;
    const birthdate = user.birthdate;
    const email = user.email;
    const profile_photo = user.profile_photo;
    const password = user.password;
    if (
      (name || username || birthdate || email || password || profile_photo) ==
      null
    ) {
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

  async postLogin(user: User): Promise<LoginResponse> {
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

  async putUpdateUser(id: number, updatedUser: User): Promise<LoginResponse> {
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

  async deleteUser(id: number): Promise<LoginResponse> {
    const query = `DELETE FROM user WHERE id = ?`;
    const result = await this.getOneUser(id);
    if (result === undefined || result.status == 404) {
      return { status: 404, msg: 'Erro: Usuário não existe' };
    }
    await this.userRepository.query(query, [id]);
    return { status: 204, msg: 'Sucesso' };
  }
}
