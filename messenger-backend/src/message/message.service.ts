import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import User from '../../dist/src/common/types/user.type';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return (
      await this.prismaService.message.findMany({
        select: {
          id: true,
          content: true,
          createdAt: true,
          userId: true,
          parentId: true,
          user: {
            select: {
              id: true,
              name: true,
            },
          },
          parent: {
            select: {
              content: true,
            },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
      })
    ).map((message) => ({
      ...message,
      isOwnMessage: message.userId === message.user.id,
    }));
  }

  async create({ parentId, content }: CreateMessageDto, user: User) {
    return await this.prismaService.message.create({
      data: {
        content,
        parentId: parentId || null,
        userId: user.id,
      },
    });
  }
}
