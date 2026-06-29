import { AuthService } from "../auth/auth.service";
import User from "../common/types/user.type";
import { PrismaService } from "../prisma/prisma.service";
import { ChangeEmailDto } from './dto/change-email.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class ProfileService {
    private readonly prismaService;
    private readonly authService;
    constructor(prismaService: PrismaService, authService: AuthService);
    changeEmail({ newEmail }: ChangeEmailDto, user: User): Promise<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
        passwordHash: string;
    }>;
    changePassword({ currentPassword, newPassword }: ChangePasswordDto, user: User): Promise<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
        passwordHash: string;
    }>;
}
