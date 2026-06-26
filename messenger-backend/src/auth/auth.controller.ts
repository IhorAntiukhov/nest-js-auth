import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import type { Response } from 'express';
import { JwtGuard } from './guards/auth.guard';
import type RequestWithUser from 'src/common/types/request-with-user.type';
import {
  ApiConflictResponse,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({ description: 'User was successfully created.' })
  @ApiConflictResponse({
    description: 'Another user with the same email exists.',
  })
  @Post('sign-up')
  signUp(@Body() body: SignUpDto) {
    return this.authService.signUp(body);
  }

  @ApiOkResponse({ description: 'User successfully signed in.' })
  @ApiNotFoundResponse({ description: 'User with this email was not found.' })
  @ApiUnauthorizedResponse({ description: 'Email or password are invalid.' })
  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  signIn(
    @Body() body: SignInDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.signIn(body, response);
  }

  @ApiCookieAuth()
  @ApiOkResponse({ description: 'User data' })
  @ApiUnauthorizedResponse({ description: 'You are not logged in.' })
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@Req() request: RequestWithUser) {
    return request.user;
  }
}
