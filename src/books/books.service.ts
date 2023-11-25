import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { Books, BooksDocument } from './schema/books.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/auth/schema/user.schema';
import { Admin, AdminDocument } from 'src/admin/schema/admin.schema';
import { JwtService } from '@nestjs/jwt';
import { commentDto, addBookDto, deleteBookDto, updateBookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Books.name) private booksModel: Model<BooksDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async addBook(dto: addBookDto, email) {
    const control = await this.adminModel.findOne({ email: email });
    if (!control) {
      throw new UnauthorizedException('Admin Değilsin');
    }

    const newBook = new this.booksModel({
      bookname: dto.bookname,
      page: dto.page,
      comment: [],
    });

    return await newBook.save();
  }

  async deleteBook(dto: deleteBookDto, email) {
    const control = await this.adminModel.findOne({ email: email });
    if (!control) {
      throw new UnauthorizedException('Admin Değilsin');
    }

    const result = await this.booksModel.deleteOne({ _id: dto.id }).exec();

    if (result.deletedCount === 1) {
      return { success: true, message: 'Document deleted successfully' };
    } else {
      return { success: false, message: 'Document not found or not deleted' };
    }
  }

  async updateBook(dto: updateBookDto, email, id) {
    const control = await this.adminModel.findOne({ email: email });
    if (!control) {
      throw new UnauthorizedException('Admin Değilsin');
    }

    const result = await this.booksModel.findOneAndUpdate({ _id: id }, { updateBookDto }, { new: true }).exec();

    if (!result) {
      return { success: false, message: 'Belge bulunamadı veya güncellenemedi.' };
    }

    return { success: true, message: 'Belge başarıyla güncellendi.', data: result };
  }

  async addComment(dto: commentDto, req) {
    const control = await this.userModel.findOne({ email: req.user.email });
    if (!control) {
      throw new UnauthorizedException('Kullanıcı Değilsin');
    }

    const book = await this.booksModel.findOne({ bookname: dto.bookname });

    if (!book) {
      throw new NotFoundException('böyle kitap yok');
    }

    const newComment = {
      user: req.user._id,
      comment: dto.comment,
      rate: dto.rate,
      date: new Date(),
    };

    book.comments.push(newComment);
    await book.save();

    return book;
  }

  async getPaginatedBooks(page: number = 1, pageSize: number = 10): Promise<Books[]> {
    const skip = (page - 1) * pageSize;

    return this.booksModel.find().skip(skip).limit(pageSize).exec();
  }
}
