import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import User from 'src/common/types/user.type';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly authService;
    constructor(configService: ConfigService, authService: AuthService);
    validate(payload: User): Promise<{
        id: any;
        email: any;
    }>;
}
export {};
