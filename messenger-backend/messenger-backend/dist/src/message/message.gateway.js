"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const message_service_1 = require("./message.service");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const create_message_dto_1 = require("./dto/create-message.dto");
let MessageGateway = class MessageGateway {
    messageService;
    jwtService;
    prismaService;
    server;
    constructor(messageService, jwtService, prismaService) {
        this.messageService = messageService;
        this.jwtService = jwtService;
        this.prismaService = prismaService;
    }
    async handleConnection(socket) {
        const cookieHeader = socket.handshake.headers.cookie;
        const token = this.extractAccessToken(cookieHeader);
        if (token) {
            try {
                const payload = await this.jwtService.verifyAsync(token);
                const user = await this.prismaService.user.findUnique({
                    where: { id: payload.id },
                    select: { id: true, name: true, email: true },
                });
                if (user) {
                    socket.data.user = user;
                }
            }
            catch (error) {
                socket.emit('error', { message: error?.message });
            }
        }
        const messages = await this.messageService.findAll();
        socket.emit('messages', messages);
    }
    async handleDisconnect(client) { }
    async handleCreateMessage(socket, data) {
        const user = socket.data.user;
        if (!user) {
            socket.emit('error', { message: 'Unauthorized' });
            return;
        }
        const created = await this.messageService.create(data, user);
        const messages = await this.messageService.findAll();
        this.server.emit('messages', messages);
        return { event: 'created', data: created };
    }
    extractAccessToken(cookieHeader) {
        if (!cookieHeader)
            return null;
        const match = cookieHeader.match(/(?:^|; )access_token=([^;]+)/);
        return match ? decodeURIComponent(match[1]) : null;
    }
};
exports.MessageGateway = MessageGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], MessageGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('createMessage'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket,
        create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessageGateway.prototype, "handleCreateMessage", null);
exports.MessageGateway = MessageGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: true, credentials: true } }),
    __metadata("design:paramtypes", [message_service_1.MessageService,
        jwt_1.JwtService,
        prisma_service_1.PrismaService])
], MessageGateway);
//# sourceMappingURL=message.gateway.js.map