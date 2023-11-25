import { Body, Controller, Post, UseGuards, Req, Delete, Put, Param, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { AuthGuard } from '@nestjs/passport';
import { addBookDto, deleteBookDto, updateBookDto, commentDto } from './dto/book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @UseGuards(AuthGuard('admin_jwt'))
  @Post('add')
  create(@Body() addBookDto: addBookDto, @Req() req) {
    return this.bookService.addBook(addBookDto, req.user.email);
  }

  @UseGuards(AuthGuard('admin_jwt'))
  @Delete('delete')
  delete(@Body() deleteBookDto: deleteBookDto, @Req() req) {
    return this.bookService.deleteBook(deleteBookDto, req.user.email);
  }

  @UseGuards(AuthGuard('admin_jwt'))
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBookDto: updateBookDto, @Req() req) {
    return this.bookService.updateBook(updateBookDto, req.user.email, id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('comment')
  comment(@Body() commentDto: commentDto, @Req() req) {
    return this.bookService.addComment(commentDto, req);
  }

  @Get('paginate')
  async getPaginatedBooks(@Query('page') page: number = 2, @Query('pageSize') pageSize: number = 1) {
    return this.bookService.getPaginatedBooks(page, pageSize);
  }
}
