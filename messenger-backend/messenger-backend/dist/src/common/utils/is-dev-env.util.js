"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isDevEnv;
function isDevEnv(configService) {
    const nodeEnv = configService.getOrThrow('NODE_ENV');
    return nodeEnv === 'development';
}
//# sourceMappingURL=is-dev-env.util.js.map