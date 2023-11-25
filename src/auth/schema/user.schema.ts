import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Mongoose } from 'mongoose';
import { Books } from 'src/books/schema/books.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ default: null })
  googleID: string;

  @Prop({ required: true, minlength: 3, maxlength: 100 })
  fullname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ default: null })
  password: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Books' }] })
  favbooks: Books[];

  @Prop({ required: true, default: true })
  isActive: boolean;
}

export const userSchema = SchemaFactory.createForClass(User);
