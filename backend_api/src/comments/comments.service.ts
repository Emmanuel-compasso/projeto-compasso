/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comments.entity';
interface CommentResponse {
  status: number;
  msg: string;
  comment?: Comment;
  comments?: Comment[];
}

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async getAllComments(id: number): Promise<CommentResponse> {
    // all comments from one post
    const query = `SELECT id, user, comment FROM comment WHERE postId = ?`;
    const comments = await this.commentRepository.query(query, [id]);
    if (comments.length === 0) {
      return { status: 404, msg: 'Erro: Nenhum comentário' };
    }
    return { status: 200, msg: 'Sucesso', comments: comments };
  }

  async getOneComment(id: number): Promise<CommentResponse> {
    // one specific comment from all posts
    const query = `SELECT id, user, comment FROM comment WHERE id = ?`;
    const comment = await this.commentRepository.query(query, [id]);
    if (comment.length === 0) {
      return { status: 404, msg: 'Erro: Comentário não existe' };
    }
    return { status: 200, msg: 'Sucesso', comment: comment[0] };
  }

  async postNewComment(comment: Comment, id: number): Promise<CommentResponse> {
    const user = comment.user;
    const comment_content = comment.comment;
    const query = `INSERT INTO comment (postId, user, comment) VALUES (?, ?, ?)`;

    if ( user === null || comment_content === null) {
      return { status: 400, msg: 'Erro: Campo inválido' };
    }

    await this.commentRepository.query(query, [id, user, comment_content]);

    const insertedIdQuery = `SELECT last_insert_rowid() as id`;
    const insertedIdResult = await this.commentRepository.query(insertedIdQuery);
    const insertedId = insertedIdResult[0].id;

    const query2 = `SELECT postId, id, user, comment FROM comment WHERE id = ?`;
    const newComment = await this.commentRepository.query(query2, [insertedId]);

    return { status: 201, msg: 'Sucesso', comment: newComment[0] };
  }

  async deleteComment(id: number): Promise<CommentResponse> {
    const query = `DELETE FROM comment WHERE id = ?`;
    const result = await this.getOneComment(id);
    if (result === undefined || result.status == 404) {
      return { status: 404, msg: 'Erro: Comentário não existe' };
    }
    await this.commentRepository.query(query, [id]);
    return { status: 204, msg: 'Sucesso' };
  }
}
