import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { Admin, adminSchema } from './schema/admin.schema';
import { AdminJwtStrategy } from './strategy/JwtStrategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Admin.name, schema: adminSchema }]),
    JwtModule.register({
      secret: 'xxx',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService, AdminJwtStrategy],
})
export class AdminModule {}
