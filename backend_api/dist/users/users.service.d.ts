interface Users {
    id: number;
    name: string;
    user?: string;
    birthdate?: Date;
    email?: string;
    profile_photo?: URL;
}
export declare class UsersService {
    getAllUsers(): Users;
    getOneUser(): Users;
    postNewUser(): Users;
    putUpdateUser(): Users;
    deleteUser(): Users;
}
export {};
