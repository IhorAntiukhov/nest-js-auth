import { ConfigService } from "messenger-backend/node_modules/@nestjs/config";
import { PrismaClient } from "generated/prisma/client";
export declare class PrismaService extends PrismaClient {
  private readonly configService;
  constructor(configService: ConfigService);
}
