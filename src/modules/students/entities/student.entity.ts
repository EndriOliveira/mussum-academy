import { Discipline } from 'src/modules/disciplines/entities/discipline.entity';
import { BaseEntity } from '../../bases/entities/base.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class Student extends BaseEntity {
  @Column()
  name: string;

  @Column()
  key: string;

  @ManyToMany(() => Discipline, (discipline) => discipline.students, {
    nullable: true,
  })
  disciplines: Discipline[];
}
