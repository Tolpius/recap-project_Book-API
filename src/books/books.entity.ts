import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('books')
export class Books {
  @PrimaryGeneratedColumn()
  id: number; // Wenn du UUID willst: @PrimaryGeneratedColumn('uuid')

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  publishedYear: number;
}
