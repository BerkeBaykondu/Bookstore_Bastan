import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminRegisterDto } from './dto/adminRegister.dto';
import { AuthGuard } from '@nestjs/passport';
import { AdminLoginDto } from './dto/adminLogin.dto';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post('register')
  register(@Body() dto: AdminRegisterDto) {
    return this.adminService.register(dto);
  }

  @Post('login')
  login(@Body() dto: AdminLoginDto) {
    return this.adminService.login(dto);
  }
}
