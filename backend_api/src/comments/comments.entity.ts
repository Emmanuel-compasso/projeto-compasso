/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Post } from '../posts/posts.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  user?: string;

  @Column()
  comment?: string;

  @ManyToOne(() => Post, post => post.comments)
  post?: Post;
}
