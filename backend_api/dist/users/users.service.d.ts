import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
    getOneUser(id: number): Promise<User>;
    postNewUser(user: User): Promise<User>;
    putUpdateUser(id: number, updatedUser: User): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
