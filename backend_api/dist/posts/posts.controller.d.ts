import { PostsService } from './posts.service';
import { Post as PostEntity } from './posts.entity';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAllPosts(): any;
    getOnePost(id: number): any;
    postNewPost(body: PostEntity): any;
    putUpdatePost(id: number, body: any): any;
    deletePost(id: number): any;
}
