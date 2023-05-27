import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comments.entity';

@Controller('api/v1/posts/:id/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  getAllUsers(): any {
    return this.commentsService.getAllComments();
  }

  @Get('/:id')
  getOneUser(@Param('id') id: number): any {
    return this.commentsService.getOneComment(id);
  }

  @Post()
  postNewUser(@Body() body: Comment): any {
    return this.commentsService.postNewComment(body);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number): any {
    return this.commentsService.deleteComment(id);
  }
}
