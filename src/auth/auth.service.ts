import { Injectable } from '@nestjs/common';

@Injectable()
export default class AuthService {
  SignIn() {
    return { status: 200, msg: 'Signed In' };
  }
  SignUp() {
    return { status: 200, msg: 'Signed Up' };
  }
}
