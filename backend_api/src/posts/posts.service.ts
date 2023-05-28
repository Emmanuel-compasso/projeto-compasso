import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './posts.entity';
interface PostResponse {
  status: number;
  msg: string;
  post?: Post;
  posts?: Post[];
}

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async getAllPosts(): Promise<PostResponse> {
    const query = `SELECT id, user, post_date, description, likes, url_imagem FROM post`;
    const posts = await this.postRepository.query(query);
    if (posts.length === 0) {
      return { status: 404, msg: 'Erro: Nenhum post' };
    }
    return { status: 200, msg: 'Sucesso', posts: posts };
  }

  async getOnePost(id: number): Promise<PostResponse> {
    const query = `SELECT id, user, post_date, description, likes, url_imagem FROM post WHERE id = ?`;
    const post = await this.postRepository.query(query, [id]);
    if (post.length === 0) {
      return { status: 404, msg: 'Erro: Post não existe' };
    }
    return { status: 200, msg: 'Sucesso', post: post[0] };
  }

  async postNewPost(post: Post): Promise<PostResponse> {
    const user = post.user;
    const description = post.description;
    const url_imagem = post.url_imagem;
    const post_date = new Date();
    const likes = 0;
    if ((user || description || url_imagem || post_date) == null) {
      return { status: 400, msg: 'Erro: Campo inválido' };
    }
    const query = `INSERT INTO post (user, description, url_imagem, post_date, likes) VALUES (?, ?, ?, ?, ?)`;
    await this.postRepository.query(query, [
      user,
      description,
      url_imagem,
      post_date,
      likes,
    ]);
    const insertedIdQuery = `SELECT last_insert_rowid() as id`;
    const insertedIdResult = await this.postRepository.query(insertedIdQuery);
    const insertedId = insertedIdResult[0].id;

    const query2 = `SELECT id, user, post_date, description, likes, url_imagem FROM post WHERE id = ?`;
    const newPost = await this.postRepository.query(query2, [insertedId]);

    return { status: 201, msg: 'Sucesso', post: newPost[0] };
  }

  async putUpdatePost(id: number, updatedPost: Post): Promise<PostResponse> {
    const user = updatedPost.user;
    const description = updatedPost.description;
    const url_imagem = updatedPost.url_imagem;
    const query = `UPDATE post SET user = ?, description = ?, url_imagem = ? WHERE id = ?`;
    await this.postRepository.query(query, [user, description, url_imagem, id]);

    const newPost = await this.getOnePost(id);
    if (newPost.status == 404) {
      return { status: 404, msg: 'Erro: Post não existe' };
    }
    return { status: 200, msg: 'Sucesso', post: newPost[0] };
  }

  async deletePost(id: number): Promise<PostResponse> {
    const query = `DELETE FROM post WHERE id = ?`;
    const result = await this.getOnePost(id);
    if (result === undefined || result.status == 404) {
      return { status: 404, msg: 'Erro: Post não existe' };
    }
    await this.postRepository.query(query, [id]);
    return { status: 204, msg: 'Sucesso' };
  }
}
