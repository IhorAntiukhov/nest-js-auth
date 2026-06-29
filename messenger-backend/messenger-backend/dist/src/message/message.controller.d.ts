import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import type RequestWithUser from "../common/types/request-with-user.type";
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
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
    create(body: CreateMessageDto, req: RequestWithUser): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        parentId: number | null;
        userId: string;
    }>;
}
