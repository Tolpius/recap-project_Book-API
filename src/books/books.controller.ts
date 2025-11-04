import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Post()
  create(@Body() body: CreateBookDto) {
    return this.booksService.create(body);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.booksService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: UpdateBookDto) {
    return this.booksService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(204) // matches your OpenAPI spec
  remove(@Param('id') id: number) {
    return this.booksService.remove(id);
  }
}
