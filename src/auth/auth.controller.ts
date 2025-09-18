import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import AuthService from './auth.service';
import { AuthDto } from './dto';

// auth/signin
// auth/signup

@Controller('auth')
export default class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  SignIn(@Body() dto: AuthDto) {
    return this.authService.SignIn(dto);
  }

  @Post('signup')
  SignUp(@Body() dto: AuthDto) {
    return this.authService.SignUp(dto);
  }
}
