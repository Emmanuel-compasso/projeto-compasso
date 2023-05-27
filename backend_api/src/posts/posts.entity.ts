/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, IntegerType, OneToMany } from 'typeorm';
import { Comment } from '../comments/comments.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  user?: string;

  @Column()
  post_date?: Date;

  @Column()
  description?: string;

  @Column()
  likes?: number;

  @OneToMany(() => Comment, comment => comment.post)
  comments?: Comment[];

  @Column()
  url_imagem?: string;
}
