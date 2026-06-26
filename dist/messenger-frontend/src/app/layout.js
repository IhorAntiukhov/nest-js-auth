"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const google_1 = require("next/font/google");
require("./globals.css");
const sonner_1 = require("sonner");
const geistMono = (0, google_1.Geist_Mono)({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});
exports.metadata = {
    title: 'Simple messenger app',
    description: 'A simple messenger app built with Next.js, NestJS, and Prisma.',
};
function RootLayout({ children, }) {
    return (<html lang="en" className={`${geistMono.variable} h-full antialiased font-mono`}>
      <body className="flex flex-col min-h-full">
        {children}
        <sonner_1.Toaster position="bottom-center" richColors/>
      </body>
    </html>);
}
//# sourceMappingURL=layout.js.map