import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class AuthService {
  constructor(private prisma: PrismaService) {}

  SignIn() {
    return { status: 200, msg: 'Signed In' };
  }
  async SignUp(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    return user;
  }
}
