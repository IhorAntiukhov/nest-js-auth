'use server';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = signIn;
const fetch_with_credentials_1 = __importDefault(require("@/actions/fetch-with-credentials"));
const headers_1 = require("next/headers");
async function signIn({ email, password }) {
    const response = await (0, fetch_with_credentials_1.default)({
        url: '/auth/sign-in',
        method: 'POST',
        body: { email, password },
    });
    if (!response.ok) {
        const body = await response.json();
        throw new Error(body.message);
    }
    const setCookieHeader = response.headers.get('set-cookie');
    if (setCookieHeader) {
        const cookieStore = await (0, headers_1.cookies)();
        cookieStore.set({
            name: 'access_token',
            value: extractCookieValue(setCookieHeader),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            expires: Date.now() + Number(process.env.ACCESS_TOKEN_MAX_AGE),
        });
    }
}
function extractCookieValue(headerString) {
    return headerString.split(';')[0].split('=')[1];
}
//# sourceMappingURL=sign-in.js.map