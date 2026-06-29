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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/guards/auth.guard");
const change_email_dto_1 = require("./dto/change-email.dto");
const change_password_dto_1 = require("./dto/change-password.dto");
const profile_service_1 = require("./profile.service");
let ProfileController = class ProfileController {
    profileService;
    constructor(profileService) {
        this.profileService = profileService;
    }
    changeEmail(body, req) {
        return this.profileService.changeEmail(body, req.user);
    }
    changePassword(body, req) {
        return this.profileService.changePassword(body, req.user);
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Change user email',
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Email changed successfully' }),
    (0, swagger_1.ApiConflictResponse)({ description: 'Email is already in use' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'You are not logged in.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.Put)('change-email'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_email_dto_1.ChangeEmailDto, Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "changeEmail", null);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'Change user password',
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Password changed successfully' }),
    (0, swagger_1.ApiConflictResponse)({ description: 'Password is already in use' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Invalid credentials' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.Put)('change-password'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_password_dto_1.ChangePasswordDto, Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "changePassword", null);
exports.ProfileController = ProfileController = __decorate([
    (0, common_1.Controller)('profile'),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map