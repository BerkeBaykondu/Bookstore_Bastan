import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/auth/schema/user.schema';

export type BooksDocument = HydratedDocument<Books>;

@Schema({ timestamps: true })
export class Books {
  @Prop({ required: true, minlength: 1, maxlength: 1000, unique: true })
  bookname: string;

  @Prop({ required: true, MIN_VALUE: 1 })
  page: number;

  // author gelecek bu araya

  @Prop([
    {
      _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comment: { type: String, maxlength: 1000 },
      rate: { type: Number, min: 1, max: 5 },
      date: { type: Date, default: Date.now },
    },
  ])
  comments: Array<Record<string, any>>;
}

export const booksSchema = SchemaFactory.createForClass(Books);
