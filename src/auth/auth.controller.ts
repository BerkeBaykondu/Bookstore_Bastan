import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './dto/userRegister.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserLoginDto } from './dto/userLogin.dto';
import { ChangeActivityDto } from './dto/changeActivity.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() dto: UserRegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: UserLoginDto) {
    return this.authService.login(dto);
  }

  @Get('google/login')
  @UseGuards(AuthGuard('google'))
  async handleLogin() {}
  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  handleRedirect(@Req() req, @Res() res) {
    this.authService.googleLogin(req, res);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('test1234555')
  async test12344(@Req() req) {
    return this.authService.test12344(req);
  }

  @UseGuards(AuthGuard('admin_jwt'))
  @Post('adminchange')
  async adminchange(@Req() req, @Body() dto: ChangeActivityDto) {
    return this.authService.AdminChangeUserActivity(dto, req);
  }
}
