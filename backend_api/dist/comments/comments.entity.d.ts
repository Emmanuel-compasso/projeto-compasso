import { Post } from '../posts/posts.entity';
export declare class Comment {
    id?: number;
    user?: string;
    comment?: string;
    post?: Post;
}
