import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Books } from './books.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books)
    private readonly bookRepo: Repository<Books>,
  ) {}

  findAll() {
    return this.bookRepo.find();
  }

  async findOne(id: number) {
    const book = await this.bookRepo.findOne({ where: { id } });
    if (!book) throw new NotFoundException(`Book with id ${id} not found`);
    return book;
  }

  create(data: CreateBookDto) {
    const book = this.bookRepo.create(data);
    return this.bookRepo.save(book);
  }

  async update(id: number, data: UpdateBookDto) {
    const book = await this.findOne(id);
    Object.assign(book, data);
    return this.bookRepo.save(book);
  }

  async remove(id: number) {
    const result = await this.bookRepo.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Book with id ${id} not found`);
  }
}
