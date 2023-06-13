import { Lesson } from '../../lessons/entities/lesson.entity';
import { BaseEntity } from '../../bases/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Content extends BaseEntity {
  @Column()
  description: string;

  @Column({ nullable: true })
  linkContent: string;

  @ManyToOne(() => Lesson, (lesson) => lesson.contents)
  lesson?: Lesson;

  @Column({ nullable: true })
  lessonId: string;
}
