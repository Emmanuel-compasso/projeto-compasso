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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comments_entity_1 = require("./comments.entity");
let CommentsService = class CommentsService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async getAllComments() {
        const query = `SELECT id, user, comment FROM comment`;
        const comments = await this.commentRepository.query(query);
        if (comments.length === 0) {
            return { status: 404, msg: 'Erro: Nenhum comentário' };
        }
        return { status: 200, msg: 'Sucesso', comments: comments };
    }
    async getOneComment(id) {
        const query = `SELECT id, user, comment FROM comment WHERE id = ?`;
        const comment = await this.commentRepository.query(query, [id]);
        if (comment.length === 0) {
            return { status: 404, msg: 'Erro: Usuário não existe' };
        }
        return { status: 200, msg: 'Sucesso', comment: comment[0] };
    }
    async postNewComment(comment) {
        const post_id = comment.post.id;
        const user = comment.user;
        const comment_content = comment.comment;
        const query = `INSERT INTO comment (post, user, comment) VALUES (?, ?, ?)`;
        if ((post_id || user || comment_content) == null) {
            return { status: 400, msg: 'Erro: Campo inválido' };
        }
        await this.commentRepository.query(query, [post_id, user, comment_content]);
        const insertedIdQuery = `SELECT last_insert_rowid() as id`;
        const insertedIdResult = await this.commentRepository.query(insertedIdQuery);
        const insertedId = insertedIdResult[0].id;
        const query2 = `SELECT post, id, user, comment FROM comment WHERE id = ?`;
        const newComment = await this.commentRepository.query(query2, [insertedId]);
        return { status: 201, msg: 'Sucesso', comment: newComment[0] };
    }
    async deleteComment(id) {
        const query = `DELETE FROM comment WHERE id = ?`;
        const result = await this.commentRepository.query(query, [id]);
        if (result.id == null) {
            return { status: 404, msg: 'Erro: Comentário não existe' };
        }
        return { status: 204, msg: 'Sucesso' };
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comments_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map