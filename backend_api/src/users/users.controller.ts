import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): any {
    return this.usersService.getAllUsers();
  }

  @Get('/:id')
  getOneUser(@Param('id') id: number): any {
    return this.usersService.getOneUser(id);
  }

  @Post()
  postNewUser(@Body() body: User): any {
    return this.usersService.postNewUser(body);
  }

  @Post('/login')
  postLogin(@Body() body: User): any {
    return this.usersService.postLogin(body);
  }

  @Put('/:id')
  putUpdateUser(@Param('id') id: number, @Body() body: any): any {
    return this.usersService.putUpdateUser(id, body);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number): any {
    return this.usersService.deleteUser(id);
  }
}
