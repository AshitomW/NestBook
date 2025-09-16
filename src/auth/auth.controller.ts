import { Controller, Post } from '@nestjs/common';
import AuthService from './auth.service';

// auth/signin
// auth/signup

@Controller('auth')
export default class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  SignIn() {
    return this.authService.SignIn();
  }

  @Post('signup')
  SignUp() {
    return this.authService.SignUp();
  }
}
