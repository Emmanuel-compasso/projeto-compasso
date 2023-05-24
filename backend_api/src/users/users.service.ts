import { Injectable } from '@nestjs/common';

interface Users {
  id: number;
  name: string;
  user?: string;
  birthdate?: Date;
  email?: string;
  profile_photo?: URL;
}

@Injectable()
export class UsersService {
  getAllUsers(): Users {
    return { id: 1, name: 'fulano' };
  }

  getOneUser(): Users {
    return { id: 1, name: 'fulano' };
  }

  postNewUser(): Users {
    return { id: 1, name: 'fulano' };
  }

  putUpdateUser(): Users {
    return { id: 1, name: 'fulano' };
  }

  deleteUser(): Users {
    return { id: 1, name: 'fulano' };
  }
}
