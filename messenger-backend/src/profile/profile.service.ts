import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { hash, verify } from 'argon2';
import { AuthService } from 'src/auth/auth.service';
import User from 'src/common/types/user.type';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangeEmailDto } from './dto/change-email.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class ProfileService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
  ) {}

  async changeEmail({ newEmail }: ChangeEmailDto, user: User) {
    const existingUser = await this.authService.findUserByEmail(newEmail);

    if (existingUser) {
      throw new ConflictException('Email is already in use');
    }

    return this.prismaService.user.update({
      where: { id: user.id },
      data: { email: newEmail },
    });
  }

  async changePassword(
    { currentPassword, newPassword }: ChangePasswordDto,
    user: User,
  ) {
    const existingUser = await this.authService.findUserById(user.id);

    const isPasswordValid = await verify(
      existingUser!.passwordHash,
      currentPassword,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const newPasswordHash = await hash(newPassword);

    return this.prismaService.user.update({
      where: { id: user.id },
      data: { passwordHash: newPasswordHash },
    });
  }
}
