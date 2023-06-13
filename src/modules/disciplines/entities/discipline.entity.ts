import { Student } from 'src/modules/students/entities/student.entity';
import { BaseEntity } from '../../bases/entities/base.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Discipline extends BaseEntity {
  @Column()
  name: string;

  @ManyToMany(() => Student, (student) => student.disciplines, {
    nullable: true,
  })
  @JoinTable()
  students: Student[];
}
