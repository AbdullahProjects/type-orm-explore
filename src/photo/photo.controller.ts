import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-photo.dto';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post('createPhotoPost')
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.photoService.createPost(createPostDto);
  }

  @Get()
  async getPost() {
    return 'Get all posts';
  }
}
