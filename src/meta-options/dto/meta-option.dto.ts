import { IsJSON, IsNotEmpty } from 'class-validator';

export class MetaOptionDto {
  @IsNotEmpty({ message: 'metaValue must not be empty' })
  @IsJSON()
  metaValue: string;
}
