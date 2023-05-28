import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './posts.entity';

@Controller('api/v1/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts(): any {
    return this.postsService.getAllPosts();
  }

  @Get('/:id')
  getOnePost(@Param('id') id: number): any {
    return this.postsService.getOnePost(id);
  }

  @Post()
  postNewPost(@Body() body: PostEntity): any {
    return this.postsService.postNewPost(body);
  }

  @Put('/:id')
  putUpdatePost(@Param('id') id: number, @Body() body: any): any {
    return this.postsService.putUpdatePost(id, body);
  }

  @Delete('/:id')
  deletePost(@Param('id') id: number): any {
    return this.postsService.deletePost(id);
  }
}
