import { Module } from '@nestjs/common';
import { MetaOptionsService } from './meta-options.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './entities/meta-option.entity';
import { MetaOptionsController } from './meta-options.controller';

@Module({
  providers: [MetaOptionsService],
  imports: [TypeOrmModule.forFeature([MetaOption])],
  controllers: [MetaOptionsController],
})
export class MetaOptionsModule {}
  