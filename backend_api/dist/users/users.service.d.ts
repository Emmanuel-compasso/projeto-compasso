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
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAllUsers(): Promise<UserResponse>;
    getOneUser(id: number): Promise<UserResponse>;
    postNewUser(user: User): Promise<UserResponse>;
    postLogin(user: User): Promise<LoginResponse>;
    putUpdateUser(id: number, updatedUser: User): Promise<LoginResponse>;
    deleteUser(id: number): Promise<LoginResponse>;
}
export {};
