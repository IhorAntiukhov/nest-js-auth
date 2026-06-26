"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("src/prisma/prisma.service");
const argon2_1 = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const is_dev_env_util_1 = __importDefault(require("src/common/utils/is-dev-env.util"));
let AuthService = class AuthService {
    prismaService;
    jwtService;
    configService;
    constructor(prismaService, jwtService, configService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async signUp({ name, email, password }) {
        const existingUser = await this.findUserByEmail(email);
        if (existingUser) {
            throw new common_1.ConflictException('A user with this email already exists');
        }
        const passwordHash = await (0, argon2_1.hash)(password);
        await this.prismaService.user.create({
            data: {
                name,
                email,
                passwordHash,
            },
        });
    }
    async signIn({ email, password }, response) {
        const existingUser = await this.findUserByEmail(email);
        if (!existingUser) {
            throw new common_1.NotFoundException('A user was not found');
        }
        const isPasswordValid = await (0, argon2_1.verify)(existingUser.passwordHash, password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const accessToken = await this.signAccessToken(existingUser.id, existingUser.email);
        response.cookie('access_token', accessToken, this.getCookieOptions());
    }
    async findUserById(id) {
        return await this.prismaService.user.findUnique({
            where: {
                id,
            },
        });
    }
    async findUserByEmail(email) {
        return await this.prismaService.user.findUnique({
            where: { email },
        });
    }
    async signAccessToken(id, email) {
        const payload = {
            id,
            email,
        };
        return await this.jwtService.signAsync(payload, {
            expiresIn: '7d',
        });
    }
    getCookieOptions() {
        return {
            httpOnly: true,
            secure: !(0, is_dev_env_util_1.default)(this.configService),
            sameSite: 'lax',
            maxAge: this.configService.getOrThrow('ACCESS_TOKEN_MAX_AGE'),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map