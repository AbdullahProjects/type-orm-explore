import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from './entities/meta-option.entity';
import { Repository } from 'typeorm';
import { MetaOptionDto } from './dto/meta-option.dto';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
  ) {}

  async createMetaOption(
    createMetaOptionDto: MetaOptionDto,
  ): Promise<MetaOption> {
    try {
      const newMetaOption =
        this.metaOptionRepository.create(createMetaOptionDto);
      return await this.metaOptionRepository.save(newMetaOption);
    } catch (error) {
      console.error('Error creating meta option:', error);
      throw error;
    }
  }

  async getAllMetaOptions(): Promise<MetaOption[]> {
    try {
      return await this.metaOptionRepository.find();
    } catch (error) {
      console.error('Error fetching meta options:', error);
      throw error;
    }
  }
}
