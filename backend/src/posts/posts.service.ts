import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async findAll(userId: string): Promise<Post[]> {
    return await this.postModel.find({ userId });
  }

  async create(post: Post): Promise<Post> {
    const newPost = new this.postModel(post);
    return await newPost.save();
  }
}
