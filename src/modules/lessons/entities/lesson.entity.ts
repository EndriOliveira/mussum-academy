import { Content } from '../../contents/entities/content.entity';
import { BaseEntity } from '../../bases/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Lesson extends BaseEntity {
  @Column()
  description: string;

  @OneToMany(() => Content, (content) => content.lesson)
  contents: Content[];
}
