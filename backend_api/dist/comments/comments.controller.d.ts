import { CommentsService } from './comments.service';
import { Comment } from './comments.entity';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    getAllComments(id: number): any;
    getOneComment(id: number): any;
    postNewComment(body: Comment, id: number): any;
    deleteComment(id: number): any;
}
