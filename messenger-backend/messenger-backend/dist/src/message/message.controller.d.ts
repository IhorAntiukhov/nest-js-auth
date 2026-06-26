import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import type RequestWithUser from "../common/types/request-with-user.type";
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(): Promise<{
        isOwnMessage: boolean;
        id: number;
        createdAt: Date;
        content: string;
        userId: string;
        parentId: number | null;
        user: {
            id: string;
            name: string;
        };
        parent: {
            content: string;
        } | null;
    }[]>;
    create(body: CreateMessageDto, req: RequestWithUser): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        userId: string;
        parentId: number | null;
    }>;
}
