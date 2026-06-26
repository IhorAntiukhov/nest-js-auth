"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fetchWithCredentials;
const headers_1 = require("next/headers");
async function fetchWithCredentials({ url, method, body, setCookies, }) {
    const cookieStore = await (0, headers_1.cookies)();
    const accessToken = cookieStore.get("access_token")?.value;
    return await fetch(`${process.env.API_URL}${url}`, {
        method,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Cookie: setCookies && accessToken ? `access_token=${accessToken}` : "",
        },
        body: body ? JSON.stringify(body) : undefined,
    });
}
//# sourceMappingURL=fetch-with-credentials.js.map