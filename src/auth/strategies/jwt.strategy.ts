import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import User from 'src/common/types/user.type';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          if (request && request.cookies) {
            return request.cookies['access_token'] as string;
          }

          return null;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow('JWT_SECRET_KEY'),
    });
  }

  async validate(payload: User) {
    const existingUser = await this.authService.findUserById(payload.id);

    if (!existingUser) {
      throw new UnauthorizedException('A user was not found');
    }

    return {
      id: existingUser.id,
      email: existingUser.email,
    };
  }
}
