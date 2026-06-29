import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from './message.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
import type User from 'src/common/types/user.type';

@WebSocketGateway({ cors: { origin: true, credentials: true } })
export class MessageGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server!: Server;

  constructor(
    private readonly messageService: MessageService,
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async handleConnection(socket: Socket) {
    const cookieHeader = socket.handshake.headers.cookie;
    const token = this.extractAccessToken(cookieHeader);

    if (token) {
      try {
        const payload: User = await this.jwtService.verifyAsync(token);
        const user = await this.prismaService.user.findUnique({
          where: { id: payload.id },
          select: { id: true, name: true, email: true },
        });

        if (user) {
          (socket.data as { user: User }).user = user;
        }
      } catch (error) {
        socket.emit('error', { message: (error as Error)?.message });
      }
    }

    const messages = await this.messageService.findAll();
    socket.emit('messages', messages);
  }

  async handleDisconnect(client: any) {}

  @SubscribeMessage('createMessage')
  async handleCreateMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() data: CreateMessageDto,
  ) {
    const user = (socket.data as { user: User }).user;

    if (!user) {
      socket.emit('error', { message: 'Unauthorized' });
      return;
    }

    const created = await this.messageService.create(data, user);

    const messages = await this.messageService.findAll();

    this.server.emit('messages', messages);

    return { event: 'created', data: created };
  }

  private extractAccessToken(cookieHeader?: string) {
    if (!cookieHeader) return null;

    const match = cookieHeader.match(/(?:^|; )access_token=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  }
}
