import { MetaOption } from 'src/meta-options/entities/meta-option.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'photos' })
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 20 })
  name: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  filename: string;

  @Column({ type: 'decimal', nullable: false })
  views: number;

  @Column({ type: 'boolean', nullable: true, default: true })
  isPublished: boolean;

  @OneToOne(() => MetaOption, (metaOption) => metaOption.photo)
  metaOption?: MetaOption;

  @OneToMany(() => Tag, (tag) => tag.id)
  tags?: Tag[];
}
