"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Nest js auth')
        .setDescription('An application to sign-up and sign-in using email and password')
        .addTag('auth', 'Sign-in, sign-up, and get your user')
        .setVersion('1.0')
        .build();
    const options = {
        operationIdFactory: (controllerKey, methodKey) => methodKey,
    };
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config, options);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use((0, cookie_parser_1.default)());
    app.enableCors({
        origin: process.env.ORIGIN_URL,
        credentials: true,
    });
    await app.listen(process.env.PORT ?? 5001);
}
bootstrap();
//# sourceMappingURL=main.js.map