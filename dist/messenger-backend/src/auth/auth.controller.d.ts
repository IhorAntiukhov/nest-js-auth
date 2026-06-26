import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import type { Response } from 'express';
import type RequestWithUser from 'src/common/types/request-with-user.type';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(body: SignUpDto): Promise<void>;
    signIn(body: SignInDto, response: Response): Promise<void>;
    getMe(request: RequestWithUser): any;
}
