import { PostsService } from './posts.service';
import { Post as PostEntity } from './posts.entity';
export declare class PostsController {
    private readonly usersService;
    constructor(usersService: PostsService);
    getAllUsers(): any;
    getOneUser(id: number): any;
    postNewUser(body: PostEntity): any;
    putUpdateUser(id: number, body: any): any;
    deleteUser(id: number): any;
}
