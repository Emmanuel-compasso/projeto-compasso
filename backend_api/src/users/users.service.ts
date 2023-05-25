import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    const query = `SELECT id, name, user, birthdate, email, profile_photo FROM user`;
    const users = await this.userRepository.query(query);
    if (users.length === 0) {
      throw new Error('User not found');
    }
    return users;
  }

  async getOneUser(id: number): Promise<User> {
    const query = `SELECT id, name, user, birthdate, email FROM user WHERE id = ?`;
    const user = await this.userRepository.query(query, [id]);
    if (user.length === 0) {
      throw new Error('User not found');
    }
    return user[0];
  }

  async postNewUser(user: User): Promise<User> {
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

  async putUpdateUser(id: number, updatedUser: User): Promise<User> {
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

  async deleteUser(id: number): Promise<void> {
    const query = `DELETE FROM user WHERE id = ?`;
    await this.userRepository.query(query, [id]);
  }
}
