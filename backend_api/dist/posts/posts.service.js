"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const posts_entity_1 = require("./posts.entity");
let PostsService = class PostsService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async getAllPosts() {
        const query = `SELECT id, user, post_date, description, likes, url_imagem FROM post`;
        const posts = await this.postRepository.query(query);
        if (posts.length === 0) {
            return { status: 404, msg: 'Erro: Nenhum post' };
        }
        return { status: 200, msg: 'Sucesso', posts: posts };
    }
    async getOnePost(id) {
        const query = `SELECT id, user, post_date, description, likes, url_imagem FROM post WHERE id = ?`;
        const post = await this.postRepository.query(query, [id]);
        if (post.length === 0) {
            return { status: 404, msg: 'Erro: Post não existe' };
        }
        return { status: 200, msg: 'Sucesso', post: post[0] };
    }
    async postNewPost(post) {
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
    async putUpdatePost(id, updatedPost) {
        const user = updatedPost.user;
        const description = updatedPost.description;
        const url_imagem = updatedPost.url_imagem;
        const query = `UPDATE post SET user = ?, description = ?, url_imagem = ? WHERE id = ?`;
        const result = await this.postRepository.query(query, [
            user,
            description,
            url_imagem,
            id,
        ]);
        if (result.id == null) {
            return { status: 404, msg: 'Erro: Usuário não existe' };
        }
        const insertedIdQuery = `SELECT last_insert_rowid() as id`;
        const insertedIdResult = await this.postRepository.query(insertedIdQuery);
        const insertedId = insertedIdResult[0].id;
        const query2 = `SELECT id, user, post_date, description, likes, url_imagem FROM user WHERE id = ?`;
        const newPost = await this.postRepository.query(query2, [insertedId]);
        return { status: 200, msg: 'Sucesso', post: newPost[0] };
    }
    async deletePost(id) {
        const query = `DELETE FROM post WHERE id = ?`;
        const result = await this.postRepository.query(query, [id]);
        if (result.id == null) {
            return { status: 404, msg: 'Erro: Post não existe' };
        }
        return { status: 204, msg: 'Sucesso' };
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(posts_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map