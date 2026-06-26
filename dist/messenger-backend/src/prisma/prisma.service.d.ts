import { ConfigService } from '@nestjs/config';
import { PrismaClient } from 'generated/prisma/client';
export declare class PrismaService extends PrismaClient {
    private readonly configService;
    constructor(configService: ConfigService);
}
