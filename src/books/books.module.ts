import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategy/JwtStrategy';
import { User, userSchema } from '../auth/schema/user.schema';
import { Admin, adminSchema } from '../admin/schema/admin.schema';
import { Books, booksSchema } from './schema/books.schema';
import { AdminJwtStrategy } from '../admin/strategy/JwtStrategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    MongooseModule.forFeature([{ name: Admin.name, schema: adminSchema }]),
    MongooseModule.forFeature([{ name: Books.name, schema: booksSchema }]),

    JwtModule.register({
      secret: 'xxx',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [BooksController],
  providers: [BooksService, JwtStrategy, AdminJwtStrategy],
})
export class BooksModule {}
