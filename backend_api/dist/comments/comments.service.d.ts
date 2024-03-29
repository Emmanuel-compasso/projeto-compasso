import { Repository } from 'typeorm';
import { Comment } from './comments.entity';
interface CommentResponse {
    status: number;
    msg: string;
    comment?: Comment;
    comments?: Comment[];
}
export declare class CommentsService {
    private commentRepository;
    constructor(commentRepository: Repository<Comment>);
    getAllComments(id: number): Promise<CommentResponse>;
    getOneComment(id: number): Promise<CommentResponse>;
    postNewComment(comment: Comment, id: number): Promise<CommentResponse>;
    deleteComment(id: number): Promise<CommentResponse>;
}
export {};
