import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comments.entity';

@Controller('api/v1/posts/:id/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  getAllComments(@Param('id') id: number): any {
    return this.commentsService.getAllComments(id);
  }

  @Get('/:id')
  getOneComment(@Param('id') id: number): any {
    return this.commentsService.getOneComment(id);
  }

  @Post()
  postNewComment(@Body() body: Comment, @Param('id') id: number): any {
    return this.commentsService.postNewComment(body, id);
  }

  @Delete('/:id')
  deleteComment(@Param('id') id: number): any {
    return this.commentsService.deleteComment(id);
  }
}
