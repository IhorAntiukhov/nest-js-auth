import { PrismaService } from "../prisma/prisma.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { Response } from "messenger-backend/node_modules/@types/express";
import { JwtService } from "messenger-backend/node_modules/@nestjs/jwt";
import { ConfigService } from "messenger-backend/node_modules/@nestjs/config";
export declare class AuthService {
  private readonly prismaService;
  private readonly jwtService;
  private readonly configService;
  constructor(
    prismaService: PrismaService,
    jwtService: JwtService,
    configService: ConfigService,
  );
  signUp({ name, email, password }: SignUpDto): Promise<void>;
  signIn({ email, password }: SignInDto, response: Response): Promise<void>;
  findUserById(id: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    email: string;
    passwordHash: string;
  } | null>;
  private findUserByEmail;
  private signAccessToken;
  private getCookieOptions;
}
