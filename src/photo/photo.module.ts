import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { Photo } from './entities/photo.entity';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { MetaOption } from 'src/meta-options/entities/meta-option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo, MetaOption])],
  providers: [PhotoService],
  controllers: [PhotoController],
  exports: [TypeOrmModule],
})
export class PhotoModule {}
