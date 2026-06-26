import { PrismaService } from "../prisma/prisma.service";
import User from '../../messenger-backend/dist/src/common/types/user.type';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessageService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        userId: string;
        parentId: number | null;
    }[]>;
    create({ parentId, content }: CreateMessageDto, user: User): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        userId: string;
        parentId: number | null;
    }>;
}
