import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class TagDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50, { message: 'name must be at most 50 characters' })
  @MinLength(1, { message: 'name must be at least 1 character' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100, { message: 'slug must be at most 100 characters' })
  @MinLength(1, { message: 'slug must be at least 1 character' })
  slug: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  schema?: string;

  @IsOptional()
  @IsString()
  featuredImageUrl?: string;
}
