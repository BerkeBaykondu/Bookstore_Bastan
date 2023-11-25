import { BadRequestException, Injectable, Req, Res, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { UserRegisterDto } from './dto/userRegister.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from './dto/userLogin.dto';
import { Admin, AdminDocument } from '../admin/schema/admin.schema';
import { ChangeActivityDto } from './dto/changeActivity.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
    private jwtService: JwtService,
  ) {}

  async register(dto: UserRegisterDto) {
    const user = await this.userModel.findOne({ email: dto.email });

    if (user) {
      throw new BadRequestException('Bu e-posta adresiyle zaten bir hesap bulunmakta');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const newUser = new this.userModel({
      fullname: dto.fullname,
      email: dto.email,
      password: hashedPassword,
    });

    const saveUser = await newUser.save();

    return this.createToken(saveUser.email);
  }

  async login(dto: UserLoginDto) {
    const user = await this.userModel.findOne({ email: dto.email });

    if (!user) {
      throw new UnauthorizedException('Hatalı email ya da şifre');
    }

    const isMatch = await bcrypt.compare(dto.password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Hatalı email ya da şifre');
    }

    return this.createToken(user.email);
  }

  async googleLogin(@Req() req, @Res() res) {
    var user = await this.userModel.findOne({ email: req.user.email });

    if (!user) {
      user = new this.userModel({
        fullname: req.user.name,
        email: req.user.email,
        googleID: req.user.providerId,
      });
    } else {
      user.googleID = req.user.providerId;
    }

    const saveUser = await user.save();

    const jwt = await this.createToken(saveUser.email);
    res.set('Authorization', jwt);

    return res.json({ msg: jwt });
  }

  createToken(email: string) {
    return this.jwtService.sign({ email });
  }

  async test12344(@Req() req) {
    return await this.userModel.findOne({ email: req.user.email });
  }

  async AdminChangeUserActivity(dto: ChangeActivityDto, @Req() req) {
    const controlAdmin = await this.adminModel.findOne({ email: req.user.email });
    if (!controlAdmin) {
      throw new UnauthorizedException('Admin Değilsin');
    }

    const controlUser = await this.userModel.findOne({ email: dto.email });

    controlUser.isActive = !controlUser.isActive;

    const saveUser = await controlUser.save();

    return saveUser;
  }
}
