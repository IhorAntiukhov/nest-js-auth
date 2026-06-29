import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiOkResponse,
  ApiProperty,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import type RequestWithUser from 'dist/src/common/types/request-with-user.type';
import { JwtGuard } from 'src/auth/guards/auth.guard';
import { ChangeEmailDto } from './dto/change-email.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @ApiProperty({
    name: 'Change user email',
  })
  @ApiOkResponse({ description: 'Email changed successfully' })
  @ApiConflictResponse({ description: 'Email is already in use' })
  @ApiUnauthorizedResponse({ description: 'You are not logged in.' })
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtGuard)
  @Put('change-email')
  changeEmail(@Body() body: ChangeEmailDto, @Req() req: RequestWithUser) {
    return this.profileService.changeEmail(body, req.user);
  }

  @ApiProperty({
    name: 'Change user password',
  })
  @ApiOkResponse({ description: 'Password changed successfully' })
  @ApiConflictResponse({ description: 'Password is already in use' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtGuard)
  @Put('change-password')
  changePassword(@Body() body: ChangePasswordDto, @Req() req: RequestWithUser) {
    return this.profileService.changePassword(body, req.user);
  }
}
