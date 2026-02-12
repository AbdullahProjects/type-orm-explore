import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { MetaOptionDto } from 'src/meta-options/dto/meta-option.dto';
import { TagDto } from 'src/tags/dto/tag.dto';

export class CreatePostDto {
  @IsOptional()
  @IsNumber(
    { allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 },
    { message: 'id must be a number' },
  )
  id: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, { message: 'name must be at most 20 characters' })
  @MinLength(1, { message: 'name must be at least 1 character' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100, { message: 'description must be at most 100 characters' })
  @MinLength(1, { message: 'description must be at least 1 character' })
  description: string;

  @IsOptional()
  @IsString()
  filename: string;

  @IsNotEmpty()
  @IsNumber(
    { allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 },
    { message: 'views must be a number' },
  )
  views: number;

  @IsOptional()
  @IsBoolean({ message: 'isPublished must be a boolean' })
  isPublished: boolean = false;

  @IsOptional()
  @Type(() => MetaOptionDto)
  @ValidateNested({ each: true })
  metaOption?: MetaOptionDto;

  @IsOptional({ each: true })
  @IsArray({ message: 'tags must be an array' })
  tags?: TagDto[];
}
