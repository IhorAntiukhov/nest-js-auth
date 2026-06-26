import { PrismaService } from 'src/prisma/prisma.service';
import User from '../../messenger-backend/dist/src/common/types/user.type';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessageService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<any>;
    create({ parentId, content }: CreateMessageDto, user: User): Promise<any>;
}
