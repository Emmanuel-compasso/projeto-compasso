import { CommentsService } from './comments.service';
import { Comment } from './comments.entity';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    getAllUsers(): any;
    getOneUser(id: number): any;
    postNewUser(body: Comment): any;
    deleteUser(id: number): any;
}
