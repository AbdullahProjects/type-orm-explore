import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-photo.dto';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post('createPhotoPost')
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.photoService.createPost(createPostDto);
  }

  @Get('/getAll')
  async getPost() {
    return await this.photoService.findAll();
  }

  @Delete('/:id')
  async deletePostById(@Param('id', ParseIntPipe) id: number) {
    return await this.photoService.deletePhotoById(id);
  }
}
