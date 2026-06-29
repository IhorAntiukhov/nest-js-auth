import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from './message.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../prisma/prisma.service";
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessageGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly messageService;
    private readonly jwtService;
    private readonly prismaService;
    server: Server;
    constructor(messageService: MessageService, jwtService: JwtService, prismaService: PrismaService);
    handleConnection(socket: Socket): Promise<void>;
    handleDisconnect(client: any): Promise<void>;
    handleCreateMessage(socket: Socket, data: CreateMessageDto): Promise<{
        event: string;
        data: {
            id: number;
            createdAt: Date;
            content: string;
            parentId: number | null;
            userId: string;
        };
    } | undefined>;
    private extractAccessToken;
}
