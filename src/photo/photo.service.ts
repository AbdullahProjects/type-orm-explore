import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-photo.dto';
import { MetaOption } from 'src/meta-options/entities/meta-option.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,

    @InjectRepository(MetaOption)
    private metaOptionRepository: Repository<MetaOption>,
  ) {}

  async createPost(createPostDto: CreatePostDto): Promise<Photo> {
    try {
      // Create meta-options
      let metaOption = createPostDto.metaOption
        ? this.metaOptionRepository.create(createPostDto.metaOption)
        : null;

      if (metaOption) {
        await this.metaOptionRepository.save(metaOption);
      }

      // Create photo post
      let newPhoto = this.photoRepository.create(createPostDto);
      if (metaOption) {
        newPhoto.metaOption = metaOption;
      }

      return await this.photoRepository.save(newPhoto);
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }

  async findAll() {
    const posts = await this.photoRepository.find({
      relations: {
        metaOption: true,
      },
    });
    return posts;
  }

  async deletePhotoById(id: number) {
    // const post = await this.photoRepository.findOne({
    //   where: { id },
    //   relations: ['metaOption'],
    // });

    await this.photoRepository.delete(id);

    // console.log('Phot meta option id: ', post);

    // let metaOption = await this.metaOptionRepository.find({
    //   where: { id: post?.metaOption?.id },
    //   relations: {
    //     photo: true,
    //   },
    // });
    // console.log(metaOption);
    // // await this.metaOptionRepository.delete(post?.metaOption?.id!);

    return { deleted: true, id };
  }
}
