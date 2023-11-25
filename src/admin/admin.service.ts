import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schema/admin.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AdminRegisterDto } from './dto/adminRegister.dto';
import { AdminLoginDto } from './dto/adminLogin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
    private jwtService: JwtService,
  ) {}

  async register(dto: AdminRegisterDto) {
    const user = await this.adminModel.findOne({ email: dto.email });

    if (user) {
      throw new BadRequestException('Bu e-posta adresiyle zaten bir hesap bulunmaktadır');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const newUser = new this.adminModel({
      fullname: dto.fullname,
      email: dto.email,
      password: hashedPassword,
    });

    const saveUser = await newUser.save();
    return this.createToken(saveUser.email);
  }

  async login(dto: AdminLoginDto) {
    const user = await this.adminModel.findOne({ email: dto.email });

    if (!user) {
      throw new UnauthorizedException('Hatalı email ya da şifre');
    }

    const isMatch = await bcrypt.compare(dto.password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Hatalı email ya da şifre');
    }

    return this.createToken(user.email);
  }

  createToken(email: String) {
    return this.jwtService.sign({ email });
  }
}
