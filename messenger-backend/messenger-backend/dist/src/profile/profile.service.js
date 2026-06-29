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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const argon2_1 = require("argon2");
const auth_service_1 = require("../auth/auth.service");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfileService = class ProfileService {
    prismaService;
    authService;
    constructor(prismaService, authService) {
        this.prismaService = prismaService;
        this.authService = authService;
    }
    async changeEmail({ newEmail }, user) {
        const existingUser = await this.authService.findUserByEmail(newEmail);
        if (existingUser) {
            throw new common_1.ConflictException('Email is already in use');
        }
        return this.prismaService.user.update({
            where: { id: user.id },
            data: { email: newEmail },
        });
    }
    async changePassword({ currentPassword, newPassword }, user) {
        const existingUser = await this.authService.findUserById(user.id);
        const isPasswordValid = await (0, argon2_1.verify)(existingUser.passwordHash, currentPassword);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const newPasswordHash = await (0, argon2_1.hash)(newPassword);
        return this.prismaService.user.update({
            where: { id: user.id },
            data: { passwordHash: newPasswordHash },
        });
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        auth_service_1.AuthService])
], ProfileService);
//# sourceMappingURL=profile.service.js.map