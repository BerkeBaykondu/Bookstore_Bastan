import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema({ timestamps: true })
export class Admin {
  @Prop({ required: true, minlength: 3, maxlength: 100 })
  fullname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ default: null })
  password: string;
}

export const adminSchema = SchemaFactory.createForClass(Admin);
