import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import User from '../../dist/src/common/types/user.type.d';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.message.findMany({
      select: {
        id: true,
        content: true,
        createdAt: true,
        userId: true,
        parentId: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
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
