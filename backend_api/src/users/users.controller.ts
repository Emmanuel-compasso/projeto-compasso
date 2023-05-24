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

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): any {
    return this.usersService.getAllUsers();
  }

  @Get('/:id')
  getOneUser(@Param('id') id: string): any {
    //return this.usersService.getOneUser();
    console.log(id);
  }

  @Post()
  postNewUser(@Body() body: any): any {
    //return this.usersService.postNewUser();
    console.log(body);
  }

  @Put('/:id')
  putUpdateUser(): any {
    return this.usersService.putUpdateUser();
  }

  @Delete('/:id')
  deleteUser(): any {
    return this.usersService.deleteUser();
  }
}
