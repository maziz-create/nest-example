import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Post as PostInterface } from './interfaces/post.interface';

function get1or2() {
  return Math.floor(Math.random() * 2 + 1);
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(@Query('userId') userId: string): Promise<PostInterface[]> {
    return this.postsService.findAll(userId);
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto): Promise<PostInterface> {
    createPostDto.userId = get1or2().toString();
    return this.postsService.create(createPostDto);
  }
}
