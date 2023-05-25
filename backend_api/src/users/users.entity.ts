/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  user?: string;

  @Column()
  birthdate?: Date;

  @Column()
  email?: string;

  @Column()
  profile_photo?: string;

  @Column()
  password?: string;
}
