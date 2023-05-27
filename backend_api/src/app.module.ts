import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { Post } from './posts/posts.entity';
import { Comment } from './comments/comments.entity';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Post, Comment],
      synchronize: true,
    }),
    UsersModule,
    PostsModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
