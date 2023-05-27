import { Repository } from 'typeorm';
import { Post } from './posts.entity';
interface PostResponse {
    status: number;
    msg: string;
    post?: Post;
    posts?: Post[];
}
export declare class PostsService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    getAllPosts(): Promise<PostResponse>;
    getOnePost(id: number): Promise<PostResponse>;
    postNewPost(post: Post): Promise<PostResponse>;
    putUpdatePost(id: number, updatedPost: Post): Promise<PostResponse>;
    deletePost(id: number): Promise<PostResponse>;
}
export {};
