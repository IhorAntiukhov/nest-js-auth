import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { MessageModule } from './message/message.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true }), PrismaModule, MessageModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
