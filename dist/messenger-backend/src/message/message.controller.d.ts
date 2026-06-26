import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import type RequestWithUser from 'src/common/types/request-with-user.type';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(): Promise<any>;
    create(body: CreateMessageDto, req: RequestWithUser): Promise<any>;
}
