import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): any;
    getOneUser(id: string): any;
    postNewUser(body: any): any;
    putUpdateUser(): any;
    deleteUser(): any;
}
