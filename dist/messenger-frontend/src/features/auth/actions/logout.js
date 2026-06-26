"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = logout;
const headers_1 = require("next/headers");
async function logout() {
    const cookieStore = await (0, headers_1.cookies)();
    cookieStore.delete("access_token");
}
//# sourceMappingURL=logout.js.map