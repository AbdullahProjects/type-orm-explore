import { Body, Controller, Get, Post } from '@nestjs/common';
import { MetaOptionsService } from './meta-options.service';
import { MetaOptionDto } from './dto/meta-option.dto';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  @Get()
  async getAllMetaOptions() {
    return this.metaOptionsService.getAllMetaOptions();
  }

  @Post('create')
  async createMetaOption(@Body() createMetaOptionDto: MetaOptionDto) {
    return this.metaOptionsService.createMetaOption(createMetaOptionDto);
  }
}
