import { UsersService } from './users.service';
import { User } from './users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): any;
    getOneUser(id: number): any;
    postNewUser(body: User): any;
    putUpdateUser(id: number, body: any): any;
    deleteUser(id: number): any;
}
