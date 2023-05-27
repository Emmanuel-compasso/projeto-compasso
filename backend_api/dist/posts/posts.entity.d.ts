import { Comment } from '../comments/comments.entity';
export declare class Post {
    id?: number;
    user?: string;
    post_date?: Date;
    description?: string;
    likes?: number;
    comments?: Comment[];
    url_imagem?: string;
}
