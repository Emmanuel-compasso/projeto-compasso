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
  constructor(private readonly usersService: PostsService) {}

  @Get()
  getAllUsers(): any {
    return this.usersService.getAllPosts();
  }

  @Get('/:id')
  getOneUser(@Param('id') id: number): any {
    return this.usersService.getOnePost(id);
  }

  @Post()
  postNewUser(@Body() body: PostEntity): any {
    return this.usersService.postNewPost(body);
  }

  @Put('/:id')
  putUpdateUser(@Param('id') id: number, @Body() body: any): any {
    return this.usersService.putUpdatePost(id, body);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number): any {
    return this.usersService.deletePost(id);
  }
}
