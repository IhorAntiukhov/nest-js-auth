import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly prismaService;
    private readonly jwtService;
    private readonly configService;
    constructor(prismaService: PrismaService, jwtService: JwtService, configService: ConfigService);
    signUp({ name, email, password }: SignUpDto): Promise<void>;
    signIn({ email, password }: SignInDto, response: Response): Promise<void>;
    findUserById(id: string): Promise<any>;
    private findUserByEmail;
    private signAccessToken;
    private getCookieOptions;
}
