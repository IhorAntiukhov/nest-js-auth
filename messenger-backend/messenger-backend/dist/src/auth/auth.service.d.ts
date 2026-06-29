import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { PrismaService } from "../prisma/prisma.service";
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
export declare class AuthService {
    private readonly prismaService;
    private readonly jwtService;
    private readonly configService;
    constructor(prismaService: PrismaService, jwtService: JwtService, configService: ConfigService);
    signUp({ name, email, password }: SignUpDto): Promise<void>;
    signIn({ email, password }: SignInDto, response: Response): Promise<void>;
    findUserById(id: string): Promise<{
        name: string;
        email: string;
        id: string;
        createdAt: Date;
        passwordHash: string;
    } | null>;
    findUserByEmail(email: string): Promise<{
        name: string;
        email: string;
        id: string;
        createdAt: Date;
        passwordHash: string;
    } | null>;
    private signAccessToken;
    private getCookieOptions;
}
