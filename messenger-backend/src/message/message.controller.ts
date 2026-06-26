import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import {
  ApiCookieAuth,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards/auth.guard';
import type RequestWithUser from 'src/common/types/request-with-user.type';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @ApiOkResponse({ description: 'List of all messages' })
  @ApiUnauthorizedResponse({ description: 'You are not logged in.' })
  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @ApiCookieAuth()
  @ApiOkResponse({ description: 'Message created successfully' })
  @ApiUnauthorizedResponse({ description: 'You are not logged in.' })
  @UseGuards(JwtGuard)
  @Post()
  create(@Body() body: CreateMessageDto, @Req() req: RequestWithUser) {
    return this.messageService.create(body, req.user);
  }
}
