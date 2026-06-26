"use server";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = signUp;
const fetch_with_credentials_1 = __importDefault(require("@/actions/fetch-with-credentials"));
async function signUp({ name, email, password }) {
    const response = await (0, fetch_with_credentials_1.default)({
        url: "/auth/sign-up",
        method: "POST",
        body: { name, email, password },
    });
    if (!response.ok) {
        const body = await response.json();
        throw new Error(body.message);
    }
}
//# sourceMappingURL=sign-up.js.map