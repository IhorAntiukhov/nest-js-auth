import type RequestWithUser from "../../dist/src/common/types/request-with-user.type";
import { ChangeEmailDto } from './dto/change-email.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    changeEmail(body: ChangeEmailDto, req: RequestWithUser): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        name: string;
        passwordHash: string;
    }>;
    changePassword(body: ChangePasswordDto, req: RequestWithUser): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        name: string;
        passwordHash: string;
    }>;
}
