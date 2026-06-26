import { ConfigService } from "messenger-backend/node_modules/@nestjs/config";
import { Strategy } from "messenger-backend/node_modules/@types/passport-jwt";
import User from "../../common/types/user.type";
import { AuthService } from "../auth.service";
declare const JwtStrategy_base: new (
  ...args:
    | [
        opt: import("messenger-backend/node_modules/@types/passport-jwt").StrategyOptionsWithRequest,
      ]
    | [
        opt: import("messenger-backend/node_modules/@types/passport-jwt").StrategyOptionsWithoutRequest,
      ]
) => Strategy & {
  validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
  private readonly configService;
  private readonly authService;
  constructor(configService: ConfigService, authService: AuthService);
  validate(payload: User): Promise<{
    id: string;
    email: string;
  }>;
}
export {};
