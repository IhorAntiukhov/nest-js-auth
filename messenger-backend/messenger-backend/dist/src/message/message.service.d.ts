import { PrismaService } from "../prisma/prisma.service";
import User from '../../dist/src/common/types/user.type';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessageService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<{
        isOwnMessage: boolean;
        user: {
            name: string;
            id: string;
        };
        id: number;
        createdAt: Date;
        content: string;
        parentId: number | null;
        userId: string;
        parent: {
            content: string;
        } | null;
    }[]>;
    create({ parentId, content }: CreateMessageDto, user: User): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        parentId: number | null;
        userId: string;
    }>;
}
